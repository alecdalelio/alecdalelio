"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

export type FilterType = 'tag' | 'role' | 'category';

interface FilterState {
  tags: string[];
  roles: string[];
  categories: string[];
}

interface ProjectFilterContextType {
  filters: FilterState;
  setFilter: (type: FilterType, value: string) => void;
  clearFilter: (type: FilterType, value: string) => void;
  clearAllFilters: () => void;
  isFilterActive: (type: FilterType, value: string) => boolean;
}

const ProjectFilterContext = createContext<ProjectFilterContextType | undefined>(undefined);

export function ProjectFilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>({
    tags: [],
    roles: [],
    categories: []
  });

  const setFilter = (type: FilterType, value: string) => {
    setFilters(prev => {
      const key = type === 'tag' ? 'tags' : type === 'role' ? 'roles' : 'categories';
      if (!prev[key].includes(value)) {
        return {
          ...prev,
          [key]: [...prev[key], value]
        };
      }
      return prev;
    });
  };

  const clearFilter = (type: FilterType, value: string) => {
    setFilters(prev => {
      const key = type === 'tag' ? 'tags' : type === 'role' ? 'roles' : 'categories';
      return {
        ...prev,
        [key]: prev[key].filter(item => item !== value)
      };
    });
  };

  const clearAllFilters = () => {
    setFilters(prev => ({
      ...prev,
      tags: [],
      roles: [],
      categories: []
    }));
  };

  const isFilterActive = (type: FilterType, value: string) => {
    const key = type === 'tag' ? 'tags' : type === 'role' ? 'roles' : 'categories';
    return filters[key].includes(value);
  };

  return (
    <ProjectFilterContext.Provider value={{
      filters,
      setFilter,
      clearFilter,
      clearAllFilters,
      isFilterActive
    }}>
      {children}
    </ProjectFilterContext.Provider>
  );
}

export function useProjectFilters() {
  const context = useContext(ProjectFilterContext);
  if (context === undefined) {
    throw new Error('useProjectFilters must be used within a ProjectFilterProvider');
  }
  return context;
} 