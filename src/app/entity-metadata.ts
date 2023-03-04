import { EntityMetadataMap, EntityDataModuleConfig } from "@ngrx/data";
const entityMetadata: EntityMetadataMap = { Issue: {
    filterFn: (issues, text) => { if (text) {
      const lowercased = text.toLowerCase(); return issues.filter(
        ({ title, description }) => title.toLowerCase().includes(lowercased) || description.toLowerCase().includes(lowercased)
      );
    } else {
      return issues; }
    }, },
};
export const entityConfig: EntityDataModuleConfig = { entityMetadata,
};
