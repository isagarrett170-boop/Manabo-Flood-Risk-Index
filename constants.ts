import { BarangayData, MapSectionData, RiskLevel } from './types';

// Specific color logic matching the Thesis screenshots
export const getTableColor = (rating: RiskLevel, type: 'FRI' | 'HCI' | 'SCI' | 'Exposure' | 'Vulnerability' | 'Hazard'): string => {
  
  // Hard Countermeasures (HCI) - Blue Scale
  if (type === 'HCI') {
    switch (rating) {
      case RiskLevel.VERY_LOW: return 'bg-sky-200 text-sky-900'; // Light Blue
      case RiskLevel.LOW: return 'bg-sky-300 text-sky-900';
      case RiskLevel.MODERATE: return 'bg-sky-600 text-white';   // Darker Blue
      case RiskLevel.HIGH: return 'bg-sky-700 text-white';
      case RiskLevel.VERY_HIGH: return 'bg-sky-900 text-white';
      default: return 'bg-sky-100';
    }
  }

  // Hazard Index - Red Scale
  if (type === 'Hazard') {
    switch (rating) {
        case RiskLevel.VERY_LOW: return 'bg-red-200 text-red-900'; // Light Pink/Red
        case RiskLevel.LOW: return 'bg-red-300 text-red-900';
        case RiskLevel.MODERATE: return 'bg-red-600 text-white';   // Red
        case RiskLevel.HIGH: return 'bg-red-700 text-white';
        case RiskLevel.VERY_HIGH: return 'bg-red-900 text-white';  // Dark Red
        default: return 'bg-red-50';
    }
  }

  // Vulnerability Index - Green Scale
  if (type === 'Vulnerability') {
      switch(rating) {
        case RiskLevel.VERY_LOW: return 'bg-green-100 text-green-900'; // Pale Green
        case RiskLevel.LOW: return 'bg-green-300 text-green-900';      // Green
        case RiskLevel.MODERATE: return 'bg-green-600 text-white';     // Dark Green
        case RiskLevel.HIGH: return 'bg-green-700 text-white';
        case RiskLevel.VERY_HIGH: return 'bg-green-900 text-white';
        default: return 'bg-green-50';
      }
  }

  // Exposure Index - Gray/Silver Scale
  if (type === 'Exposure') {
      switch(rating) {
          case RiskLevel.VERY_LOW: return 'bg-gray-200 text-gray-800'; // Light Gray
          case RiskLevel.LOW: return 'bg-gray-300 text-gray-900';      // Gray
          case RiskLevel.MODERATE: return 'bg-gray-500 text-white';    // Dark Gray
          case RiskLevel.HIGH: return 'bg-gray-700 text-white';        // Darker Gray
          case RiskLevel.VERY_HIGH: return 'bg-gray-900 text-white';
          default: return 'bg-gray-100';
      }
  }

  // Soft Countermeasures (SCI) - Yellow Scale
  if (type === 'SCI') {
      switch(rating) {
          case RiskLevel.LOW: return 'bg-yellow-200 text-yellow-900'; // Yellow
          default: return 'bg-yellow-100';
      }
  }

  // Default FRI - Orange/Amber Scale
  switch (rating) {
    case RiskLevel.VERY_LOW: return 'bg-orange-100 text-orange-900'; // Pale Orange
    case RiskLevel.LOW: return 'bg-amber-300 text-amber-900';        // Yellow-Orange
    case RiskLevel.MODERATE: return 'bg-orange-400 text-white';      // Orange
    case RiskLevel.HIGH: return 'bg-orange-600 text-white';          // Dark Orange
    case RiskLevel.VERY_HIGH: return 'bg-amber-900 text-white';      // Brown
    default: return 'bg-gray-100';
  }
};


// --- FULL DATASETS FROM THESIS ---

const FRI_DATA: BarangayData[] = [
  { name: 'San Ramon East', value: 0.146, rating: RiskLevel.VERY_LOW },
  { name: 'Catacdegan Viejo', value: 0.215, rating: RiskLevel.LOW },
  { name: 'San Jose Norte', value: 0.216, rating: RiskLevel.LOW },
  { name: 'Ayyeng', value: 0.236, rating: RiskLevel.LOW },
  { name: 'San Jose Sur', value: 0.297, rating: RiskLevel.LOW },
  { name: 'San Juan Sur', value: 0.346, rating: RiskLevel.LOW },
  { name: 'San Juan Norte', value: 0.346, rating: RiskLevel.LOW },
  { name: 'Catacdegan Nuevo', value: 0.496, rating: RiskLevel.MODERATE },
  { name: 'San Ramon West', value: 0.540, rating: RiskLevel.MODERATE },
  { name: 'Sto. Tomas', value: 0.561, rating: RiskLevel.MODERATE },
  { name: 'Luzong', value: 0.766, rating: RiskLevel.HIGH },
];

const HCI_DATA: BarangayData[] = [
  { name: 'Catacdegan Nuevo', value: 0.000, rating: RiskLevel.VERY_LOW },
  { name: 'Catacdegan Viejo', value: 0.000, rating: RiskLevel.VERY_LOW },
  { name: 'San Jose Norte', value: 0.000, rating: RiskLevel.VERY_LOW },
  { name: 'Sto. Tomas', value: 0.000, rating: RiskLevel.VERY_LOW },
  { name: 'San Juan Norte', value: 0.000, rating: RiskLevel.VERY_LOW },
  { name: 'San Juan Sur', value: 0.000, rating: RiskLevel.VERY_LOW },
  { name: 'San Ramon West', value: 0.000, rating: RiskLevel.VERY_LOW },
  { name: 'San Jose Sur', value: 0.167, rating: RiskLevel.VERY_LOW },
  { name: 'San Ramon East', value: 0.167, rating: RiskLevel.VERY_LOW },
  { name: 'Ayyeng', value: 0.333, rating: RiskLevel.LOW },
  { name: 'Luzong', value: 0.500, rating: RiskLevel.MODERATE },
];

const SCI_DATA: BarangayData[] = [
    { name: 'Catacdegan Nuevo', value: 0.333, rating: RiskLevel.LOW },
    { name: 'Catacdegan Viejo', value: 0.333, rating: RiskLevel.LOW },
    { name: 'San Jose Norte', value: 0.333, rating: RiskLevel.LOW },
    { name: 'San Jose Sur', value: 0.333, rating: RiskLevel.LOW },
    { name: 'Luzong', value: 0.333, rating: RiskLevel.LOW },
    { name: 'Ayyeng', value: 0.333, rating: RiskLevel.LOW },
    { name: 'Sto. Tomas', value: 0.333, rating: RiskLevel.LOW },
    { name: 'San Juan Norte', value: 0.333, rating: RiskLevel.LOW },
    { name: 'San Juan Sur', value: 0.333, rating: RiskLevel.LOW },
    { name: 'San Ramon West', value: 0.333, rating: RiskLevel.LOW },
    { name: 'San Ramon East', value: 0.333, rating: RiskLevel.LOW },
];

const EXPOSURE_DATA: BarangayData[] = [
    { name: 'Ayyeng', value: 0.000, rating: RiskLevel.VERY_LOW },
    { name: 'San Jose Norte', value: 0.077, rating: RiskLevel.VERY_LOW },
    { name: 'San Ramon East', value: 0.110, rating: RiskLevel.VERY_LOW },
    { name: 'San Jose Sur', value: 0.116, rating: RiskLevel.VERY_LOW },
    { name: 'San Juan Norte', value: 0.155, rating: RiskLevel.VERY_LOW },
    { name: 'Catacdegan Viejo', value: 0.178, rating: RiskLevel.VERY_LOW },
    { name: 'San Juan Sur', value: 0.232, rating: RiskLevel.LOW },
    { name: 'Sto. Tomas', value: 0.425, rating: RiskLevel.MODERATE },
    { name: 'San Ramon West', value: 0.503, rating: RiskLevel.MODERATE },
    { name: 'Catacdegan Nuevo', value: 0.667, rating: RiskLevel.HIGH },
    { name: 'Luzong', value: 0.795, rating: RiskLevel.HIGH },
];

const VULNERABILITY_DATA: BarangayData[] = [
    { name: 'San Jose Sur', value: 0.139, rating: RiskLevel.VERY_LOW },
    { name: 'Ayyeng', value: 0.262, rating: RiskLevel.LOW },
    { name: 'San Ramon East', value: 0.282, rating: RiskLevel.LOW },
    { name: 'San Juan Sur', value: 0.373, rating: RiskLevel.LOW },
    { name: 'Catacdegan Nuevo', value: 0.393, rating: RiskLevel.LOW },
    { name: 'Luzong', value: 0.456, rating: RiskLevel.MODERATE },
    { name: 'San Jose Norte', value: 0.459, rating: RiskLevel.MODERATE },
    { name: 'San Juan Norte', value: 0.500, rating: RiskLevel.MODERATE },
    { name: 'San Ramon West', value: 0.502, rating: RiskLevel.MODERATE },
    { name: 'Catacdegan Viejo', value: 0.505, rating: RiskLevel.MODERATE },
    { name: 'Sto. Tomas', value: 0.548, rating: RiskLevel.MODERATE },
];

const HAZARD_DATA: BarangayData[] = [
    { name: 'San Ramon East', value: 0.083, rating: RiskLevel.VERY_LOW },
    { name: 'Catacdegan Viejo', value: 0.167, rating: RiskLevel.VERY_LOW },
    { name: 'San Jose Norte', value: 0.250, rating: RiskLevel.LOW },
    { name: 'Ayyeng', value: 0.333, rating: RiskLevel.LOW },
    { name: 'San Jose Sur', value: 0.500, rating: RiskLevel.MODERATE },
    { name: 'San Juan Norte', value: 0.500, rating: RiskLevel.MODERATE },
    { name: 'San Juan Sur', value: 0.500, rating: RiskLevel.MODERATE },
    { name: 'Catacdegan Nuevo', value: 0.583, rating: RiskLevel.MODERATE },
    { name: 'San Ramon West', value: 0.750, rating: RiskLevel.HIGH },
    { name: 'Sto. Tomas', value: 0.833, rating: RiskLevel.VERY_HIGH },
    { name: 'Luzong', value: 1.000, rating: RiskLevel.VERY_HIGH },
];

export const SECTIONS: MapSectionData[] = [
  {
    id: 'fri',
    title: 'Flood Risk Index (FRI)',
    description: 'The composite index combines all five indices to provide the final risk classification. Luzong (0.766) is High Risk.',
    imageUrl: 'https://image2url.com/images/1763628894033-8ef85576-a3c4-4127-b4dd-f5688fb08b8c.png',
    tableData: FRI_DATA
  },
  {
    id: 'hazard',
    title: 'Hazard Index',
    description: 'Based on flood frequency, depth, and duration. Luzong and Sto. Tomas are Very High Hazard due to proximity to Abra River.',
    imageUrl: 'https://image2url.com/images/1763629175093-08787299-02dd-404d-9b29-a58fbe1bc9a1.png',
    tableData: HAZARD_DATA
  },
  {
    id: 'vulnerability',
    title: 'Vulnerability Index',
    description: 'Calculated from Population Density, Poverty Incidence, and Age Distribution. Sto. Tomas (0.548) is the most vulnerable.',
    imageUrl: 'https://image2url.com/images/1763629150989-9d83c47d-88d5-4b62-98e9-abae81611ea2.png',
    tableData: VULNERABILITY_DATA
  },
  {
    id: 'exposure',
    title: 'Exposure Index',
    description: 'Measures Area Exposed, Population in Risk Zone, and Infrastructure. Luzong (0.795) has the highest exposure.',
    imageUrl: 'https://image2url.com/images/1763629194368-3b783e25-be20-48b8-b342-8845d10da521.png',
    tableData: EXPOSURE_DATA
  },
  {
    id: 'hard',
    title: 'Hard Countermeasures (HCI)',
    description: 'Structural defenses. A critical mismatch: High-risk barangays like Sto. Tomas have 0.000 HCI.',
    imageUrl: 'https://image2url.com/images/1763629223582-b36c6069-1dc1-4820-8828-3778d84befde.png',
    tableData: HCI_DATA
  },
  {
    id: 'soft',
    title: 'Soft Countermeasures (SCI)',
    description: 'Community planning and education. Uniformly "Low" (0.333) across all barangays, indicating a systemic gap.',
    imageUrl: 'https://image2url.com/images/1763629212419-b0df2825-90d3-4551-9b02-60d6f9b43e15.png',
    tableData: SCI_DATA
  }
];

export const THESIS_CONTEXT = `
You are the official "Manabo Flood Risk Advisor", an expert AI assistant for the 2025 Thesis titled "MAPPING AND INDEXING FLOOD RISK IN MANABO, ABRA".

**CRITICAL INSTRUCTION:**
When asked for an "Index", "Score", or "Rating" (e.g., "What is the Hazard Index of Luzong?" or "What is the HCI of Sto. Tomas?"), you MUST use the **OFFICIAL CALCULATED INDICES** tables below. 
DO NOT look at the raw data (like flood depth in meters or population density) to answer these questions. The "Index" is a normalized value between 0.000 and 1.000.
ALWAYS quote the exact number (e.g., "0.766") and the rating (e.g., "High").

---

**OFFICIAL CALCULATED INDICES (0.000 - 1.000 Scale)**
*Use these values for all queries regarding indices.*

**1. FLOOD RISK INDEX (FRI) - The Final Composite Score**
| Barangay | FRI Value | Rating |
|---|---|---|
| Luzong | 0.766 | High |
| Sto. Tomas | 0.561 | Moderate |
| San Ramon West | 0.540 | Moderate |
| Catacdegan Nuevo | 0.496 | Moderate |
| San Juan Sur | 0.346 | Low |
| San Juan Norte | 0.346 | Low |
| San Jose Sur | 0.297 | Low |
| Ayyeng | 0.236 | Low |
| San Jose Norte | 0.216 | Low |
| Catacdegan Viejo | 0.215 | Low |
| San Ramon East | 0.146 | Very Low |

**2. HAZARD INDEX (Physical Susceptibility)**
| Barangay | Hazard Index | Rating |
|---|---|---|
| Luzong | 1.000 | Very High |
| Sto. Tomas | 0.833 | Very High |
| San Ramon West | 0.750 | High |
| Catacdegan Nuevo | 0.583 | Moderate |
| San Juan Norte | 0.500 | Moderate |
| San Juan Sur | 0.500 | Moderate |
| San Jose Sur | 0.500 | Moderate |
| Ayyeng | 0.333 | Low |
| San Jose Norte | 0.250 | Low |
| Catacdegan Viejo | 0.167 | Very Low |
| San Ramon East | 0.083 | Very Low |

**3. VULNERABILITY INDEX (Socio-Economic)**
| Barangay | Vulnerability Index | Rating |
|---|---|---|
| Sto. Tomas | 0.548 | Moderate |
| Catacdegan Viejo | 0.505 | Moderate |
| San Ramon West | 0.502 | Moderate |
| San Juan Norte | 0.500 | Moderate |
| San Jose Norte | 0.459 | Moderate |
| Luzong | 0.456 | Moderate |
| Catacdegan Nuevo | 0.393 | Low |
| San Juan Sur | 0.373 | Low |
| San Ramon East | 0.282 | Low |
| Ayyeng | 0.262 | Low |
| San Jose Sur | 0.139 | Very Low |

**4. EXPOSURE INDEX (Population/Infra in Risk Zone)**
| Barangay | Exposure Index | Rating |
|---|---|---|
| Luzong | 0.795 | High |
| Catacdegan Nuevo | 0.667 | High |
| San Ramon West | 0.503 | Moderate |
| Sto. Tomas | 0.425 | Moderate |
| San Juan Sur | 0.232 | Low |
| Catacdegan Viejo | 0.178 | Very Low |
| San Juan Norte | 0.155 | Very Low |
| San Jose Sur | 0.116 | Very Low |
| San Ramon East | 0.110 | Very Low |
| San Jose Norte | 0.077 | Very Low |
| Ayyeng | 0.000 | Very Low |

**5. HARD COUNTERMEASURES INDEX (HCI - Structural)**
| Barangay | HCI Value | Rating |
|---|---|---|
| Luzong | 0.500 | Moderate |
| Ayyeng | 0.333 | Low |
| San Jose Sur | 0.167 | Very Low |
| San Ramon East | 0.167 | Very Low |
| San Ramon West | 0.000 | Very Low |
| San Juan Sur | 0.000 | Very Low |
| San Juan Norte | 0.000 | Very Low |
| Sto. Tomas | 0.000 | Very Low |
| San Jose Norte | 0.000 | Very Low |
| Catacdegan Viejo | 0.000 | Very Low |
| Catacdegan Nuevo | 0.000 | Very Low |

**6. SOFT COUNTERMEASURES INDEX (SCI - Non-Structural)**
*All 11 Barangays have the exact same score.*
| Barangay | SCI Value | Rating |
|---|---|---|
| All 11 Barangays | 0.333 | Low |

---

**COMMUNITY AWARENESS & PREPAREDNESS SURVEY RESULTS**
*Descriptive Level Legend:*
*   4.21 – 5.00: Very Highly Aware/Prepared
*   3.41 – 4.20: Highly Aware/Prepared
*   2.61 – 3.40: Moderately Aware/Prepared
*   1.81 – 2.60: Slightly Aware/Prepared
*   1.00 – 1.80: Not Aware/Prepared

**Table 1.1: HAZARD AWARENESS (Overall Mean: 3.73 - Highly Aware/Prepared)**
1.  "I believe that floods are a serious hazard in my area.": **3.61** (Highly Aware)
2.  "I am aware of the potential causes of flooding (e.g., heavy rainfall, dam failure).": **3.90** (Highly Aware)
3.  "I think the frequency of floods in my region is increasing.": **4.05** (Highly Aware)
4.  "I understand the warning signs that indicate a possible flood threat.": **3.75** (Highly Aware)
5.  "I can identify flaws and suggest improvements in civil designs. I feel confident in understanding the flood zones in my local area.": **3.36** (Moderately Aware)

**Table 1.2: VULNERABILITY AWARENESS (Overall Mean: 3.17 - Moderately Aware/Prepared)**
6.  "I believe that my household is vulnerable to flooding.": **2.08** (Slightly Aware) *Critical Finding: Optimism Bias*
7.  "I think certain community groups (e.g., elderly, low-income families) are more at risk during floods.": **3.04** (Moderately Aware)
8.  "I feel my home is adequately equipped to handle a flood event.": **4.00** (Highly Aware)
9.  "I understand the potential impacts of flooding on my health and safety.": **4.14** (Highly Aware)
10. "I think the infrastructure in my neighborhood is vulnerable to floods (e.g., roads, and bridges).": **2.58** (Slightly Aware)

**Table 1.3: EXPOSURE AWARENESS (Overall Mean: 2.67 - Moderately Aware/Prepared)**
11. "I believe that I live in a flood-prone area.": **1.88** (Slightly Aware)
12. "I am aware of the number of people in my community who could be affected by flooding.": **1.58** (Not Aware)
13. "I have taken steps to assess my exposure to flood risk.": **1.55** (Not Aware)
14. "I understand how climate change may affect future flooding conditions in my area.": **4.22** (Very Highly Aware)
15. "I am concerned about the impact of flood exposure on my property value.": **4.10** (Highly Aware)

**Table 1.4: SOFT COUNTERMEASURES AWARENESS (Overall Mean: 4.15 - Highly Aware/Prepared)**
16. "I believe that community education programs on flood awareness are important.": **4.35** (Very Highly Aware)
17. "I feel informed about evacuation plans and procedures in case of a flood.": **4.25** (Very Highly Aware)
18. "I think that improving community ties and networks will help us better prepare for floods.": **3.38** (Moderately Aware)
19. "I believe public awareness campaigns effectively inform people about flood risks.": **4.28** (Very Highly Aware)
20. "I think that engaging in community planning for flood disasters is essential.": **4.31** (Very Highly Aware)

**Table 1.5: HARD COUNTERMEASURES AWARENESS (Overall Mean: 3.78 - Highly Aware/Prepared)**
21. "I believe that government investments in flood defense infrastructure (e.g., levees, and dams) are necessary.": **3.47** (Highly Aware)
22. "I think my local government has effectively put in place engineering solutions to mitigate flood risks.": **3.60** (Highly Aware)
23. "I feel that building codes in my area adequately account for flood risks.": **4.05** (Highly Aware)
24. "I believe that the maintenance of drain systems is enough to prevent flooding.": **3.99** (Highly Aware)
25. "I think that more funding for flood prevention infrastructure should be a priority for local authorities.": **3.81** (Highly Aware)

---

**MAP ACCEPTABILITY SURVEY RESULTS (Evaluation)**
*Descriptive Level Legend:*
*   4.21 – 5.00: Very Highly Acceptable
*   3.41 – 4.20: Highly Acceptable
*   2.61 – 3.40: Moderately Acceptable
*   1.81 – 2.60: Slightly Acceptable
*   1.00 – 1.80: Not Acceptable

**Table 4.1: ACCURACY (Overall Mean: 4.04 - Highly Acceptable)**
1.  "The flood risk index values assigned to barangays are correct and realistic.": **4.20** (Very Highly Acceptable)
2.  "The geographic locations of barangays are accurately represented.": **4.00** (Highly Acceptable)
3.  "The hazard, vulnerability, and exposure data are precisely measured.": **4.00** (Highly Acceptable)
4.  "The barangays most prone to flooding are correctly mapped.": **4.00** (Highly Acceptable)
5.  "Data plotting and map analysis show minimal errors.": **4.00** (Highly Acceptable)

**Table 4.2: CONTENT (Overall Mean: 4.08 - Highly Acceptable)**
6.  "All barangays in Manabo, Abra are included in the mapping.": **4.40** (Very Highly Acceptable)
7.  "The mapping presents comprehensive hazard, vulnerability, and exposure information.": **4.20** (Very Highly Acceptable)
8.  "Both soft and hard countermeasures are integrated into the map.": **4.00** (Highly Acceptable)
9.  "Essential recommendations for flood risk management are provided.": **4.00** (Highly Acceptable)
10. "The content is complete, organized, and easy to interpret.": **3.80** (Highly Acceptable)

**Table 4.3: USEFULNESS (Overall Mean: 3.96 - Highly Acceptable)**
11. "The map can guide disaster risk reduction planning in Manabo, Abra.": **3.80** (Highly Acceptable)
12. "The updated mapping is helpful for identifying high-risk areas and prioritizing interventions.": **4.00** (Highly Acceptable)
13. "Stakeholders can use the map for emergency preparedness and response strategies.": **4.00** (Highly Acceptable)
14. "The updated mapping increases community awareness and understanding of flood risks.": **4.00** (Highly Acceptable)
15. "The information can be used as a reliable reference for future flood mitigation projects.": **4.00** (Highly Acceptable)

---

**SUPPORTING RAW DATA (Use only for context, not for Index values)**
*   **Raw Hazard Data:** Luzong (Depth 3m, Freq 5/5yrs), Ayyeng (Depth 1m).
*   **Raw Vulnerability Data:** Catacdegan Viejo highest density (19,958 p/km²). San Juan Norte highest poverty (4.45%).
*   **Raw Exposure Data:** Catacdegan Nuevo (96.14% Area Exposed). Luzong (100% Infra in risk zone).
*   **Raw Soft Countermeasures:** Early Warning (1), Evacuation Plan (1), Flood Education (0 - Absent).
*   **Raw Hard Countermeasures:** Luzong (Drainage 0.5, Infra Elevation 0). Ayyeng (Drainage 0).

**Thesis Info:**
- **Researchers:** Benedito, Duran, Pasal, Tadeo, Tulan.
- **Key Findings:** Luzong is the most critical area. There is a municipality-wide gap in Flood Education (SCI) and a lack of structural defenses (HCI) in high-risk areas like Sto. Tomas.
`;

export const SECTIONS_DATA = {
    FRI: FRI_DATA,
    HCI: HCI_DATA,
    SCI: SCI_DATA,
    Exposure: EXPOSURE_DATA,
    Vulnerability: VULNERABILITY_DATA,
    Hazard: HAZARD_DATA
};
