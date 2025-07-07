"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useProjectFilters, FilterType } from "@/contexts/project-filter-context";
import { X, Filter, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FILTER_OPTIONS = {
  tags: ["AI", "Web3", "Writing"],
  roles: ["Engineer", "PM", "Writer", "GTM"],
  categories: ["fulltime", "contract", "personal"]
};

export default function ProjectFilters() {
  const { filters, setFilter, clearFilter, clearAllFilters, isFilterActive } = useProjectFilters();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isFiltersCollapsed, setIsFiltersCollapsed] = useState(true);

  const handleFilterToggle = (type: FilterType, value: string) => {
    if (isFilterActive(type, value)) {
      clearFilter(type, value);
    } else {
      setFilter(type, value);
    }
  };

  const hasActiveFilters = filters.tags.length > 0 || filters.roles.length > 0 || filters.categories.length > 0;

  const FilterChip = ({ type, value }: { type: FilterType; value: string }) => {
    const isActive = isFilterActive(type, value);
    
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Badge
          variant={isActive ? "default" : "outline"}
          className={`cursor-pointer transition-all duration-200 ${
            isActive 
              ? "bg-primary text-primary-foreground hover:bg-primary/90" 
              : "hover:bg-primary/10 hover:text-primary"
          }`}
          onClick={() => handleFilterToggle(type, value)}
        >
          {value}
          {isActive && (
            <X className="ml-1 h-3 w-3" />
          )}
        </Badge>
      </motion.div>
    );
  };

  const FilterSection = ({ title, type, values }: { title: string; type: FilterType; values: string[] }) => (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-foreground/70">{title}</h3>
      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {values.map((value) => (
            <FilterChip key={value} type={type} value={value} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );

  const MobileFilterModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm sm:hidden"
      onClick={() => setShowMobileFilters(false)}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="absolute bottom-0 left-0 right-0 bg-card border-t border-border rounded-t-xl p-6 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowMobileFilters(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-6">
          <FilterSection title="Tags" type="tag" values={FILTER_OPTIONS.tags} />
          <FilterSection title="Roles" type="role" values={FILTER_OPTIONS.roles} />
          <FilterSection title="Categories" type="category" values={FILTER_OPTIONS.categories} />
        </div>

        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={clearAllFilters}
            className="w-full mt-4"
          >
            Clear All Filters
          </Button>
        )}
      </motion.div>
    </motion.div>
  );

  return (
    <div className="space-y-4">
      {/* Filter Toggle */}
      <div className="flex items-center justify-end">
        <div className="flex items-center space-x-2">
          {/* Desktop Filter Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFiltersCollapsed(!isFiltersCollapsed)}
            className="hidden sm:flex items-center space-x-2"
          >
            <Filter className="h-4 w-4" />
            <span>Filter Projects</span>
            {isFiltersCollapsed ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </Button>

          {/* Mobile Filter Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowMobileFilters(true)}
            className="sm:hidden"
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Desktop Filters - Collapsible */}
      <motion.div
        initial={false}
        animate={{
          height: isFiltersCollapsed ? 0 : "auto",
          opacity: isFiltersCollapsed ? 0 : 1
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="hidden sm:block overflow-hidden"
      >
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-foreground/70">Filter by:</h3>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-xs"
              >
                Clear All
              </Button>
            )}
          </div>
          
          <div className="space-y-4">
            <FilterSection title="Tags" type="tag" values={FILTER_OPTIONS.tags} />
            <FilterSection title="Roles" type="role" values={FILTER_OPTIONS.roles} />
            <FilterSection title="Categories" type="category" values={FILTER_OPTIONS.categories} />
          </div>
        </div>
      </motion.div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2"
        >
          <span className="text-sm text-foreground/70">Active filters:</span>
          {filters.tags.map(tag => (
            <Badge key={`tag-${tag}`} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {filters.roles.map(role => (
            <Badge key={`role-${role}`} variant="secondary" className="text-xs">
              {role}
            </Badge>
          ))}
          {filters.categories.map(category => (
            <Badge key={`category-${category}`} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
        </motion.div>
      )}

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {showMobileFilters && <MobileFilterModal />}
      </AnimatePresence>
    </div>
  );
} 