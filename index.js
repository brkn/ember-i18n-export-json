// Copy and paste your main locale.js file.
// It should have all your imports

import currencyName from "./tr/currency-name";
import dateUtil from "./tr/date-util";
import pDatePickerWithPresets from "./tr/p-date-picker-with-presets";
import pDateRangePicker from "./tr/p-date-range-picker";
import pFilterCollectionWithCheckboxes from "./tr/p-filter-collection-with-checkboxes";
import pFilterCollectionWithDate from "./tr/p-filter-collection-with-date";
import pFilterContainer from "./tr/p-filter-container";
import pListBody from "./tr/p-list-body";
import pListAggregates from "./tr/p-list-aggregates";
import pListToggle from "./tr/p-list-toggle";
import pMonthPicker from "./tr/p-month-picker";
import pOneWayAutoComplete from "./tr/p-one-way-autocomplete";
import pPaginationInfo from "./tr/p-pagination-info";
import pSearchBox from "./tr/p-search-box";

// Move all imports into the translations object

const translations = {
  currencyName,
  dateUtil,
  pDatePickerWithPresets,
  pDateRangePicker,
  pFilterCollectionWithCheckboxes,
  pFilterCollectionWithDate,
  pFilterContainer,
  pListBody,
  pListAggregates,
  pListToggle,
  pMonthPicker,
  pPaginationInfo,
  pOneWayAutoComplete,
  pSearchBox,
};

console.log(JSON.stringify(translations));
