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
    imageUrl: 'https://image2url.com/images/1763628894033-8ef85576-a3c4-4127-b4dd-f5688fb08b8c.png', // Placeholder
    tableData: FRI_DATA
  },
  {
    id: 'hazard',
    title: 'Hazard Index',
    description: 'Based on flood frequency, depth, and duration. Luzong and Sto. Tomas are Very High Hazard due to proximity to Abra River.',
    imageUrl: 'https://image2url.com/images/1763629175093-08787299-02dd-404d-9b29-a58fbe1bc9a1.png', // Placeholder
    tableData: HAZARD_DATA
  },
  {
    id: 'vulnerability',
    title: 'Vulnerability Index',
    description: 'Calculated from Population Density, Poverty Incidence, and Age Distribution. Sto. Tomas (0.548) is the most vulnerable.',
    imageUrl: 'https://image2url.com/images/1763629150989-9d83c47d-88d5-4b62-98e9-abae81611ea2.png', // Placeholder
    tableData: VULNERABILITY_DATA
  },
  {
    id: 'exposure',
    title: 'Exposure Index',
    description: 'Measures Area Exposed, Population in Risk Zone, and Infrastructure. Luzong (0.795) has the highest exposure.',
    imageUrl: 'https://image2url.com/images/1763629194368-3b783e25-be20-48b8-b342-8845d10da521.png', // Placeholder
    tableData: EXPOSURE_DATA
  },
  {
    id: 'hard',
    title: 'Hard Countermeasures (HCI)',
    description: 'Structural defenses. A critical mismatch: High-risk barangays like Sto. Tomas have 0.000 HCI.',
    imageUrl: 'https://image2url.com/images/1763629223582-b36c6069-1dc1-4820-8828-3778d84befde.png', // Placeholder
    tableData: HCI_DATA
  },
  {
    id: 'soft',
    title: 'Soft Countermeasures (SCI)',
    description: 'Community planning and education. Uniformly "Low" (0.333) across all barangays, indicating a systemic gap.',
    imageUrl: 'https://image2url.com/images/1763629212419-b0df2825-90d3-4551-9b02-60d6f9b43e15.png', // Placeholder
    tableData: SCI_DATA
  }
];

export const THESIS_CONTEXT = `
You are the official "Manabo Flood Risk Advisor", an expert AI assistant for the 2025 Thesis titled "MAPPING AND INDEXING FLOOD RISK IN MANABO, ABRA".
Your goal is to assist residents and LGU officials in understanding the flood risk data provided in the brochure.

**Thesis Overview:**
- **Researchers:** Benedito, Angelzen A.; Duran, Rolly A.; Pasal, Dominique B.; Tadeo, Jeffershane Mae R.; Tulan, Whitney B.
- **Institution:** University of Abra (Bangued Campus).
- **Location:** Manabo, Abra (11 Barangays).
- **Framework:** Flood Risk Index (FRI) = (Hard × Exposure × Vulnerability) / (Hard Countermeasures × Soft Countermeasures).
- **Objective:** To map and index flood risk to provide a practical tool for local government and community leaders.

**Detailed Raw Data Tables (Source: Thesis Appendices):**

1. **Hazard Index Raw Data (Table 4.1 - Physical Characteristics):**
   | Barangay | Flood Depth (m) | Frequency (in 5 yrs) | Duration (days) |
   |---|---|---|---|
   | Luzong | 3 | 5 | 3 |
   | Sto. Tomas | 3 | 3 | 3 |
   | San Ramon West | 3 | 4 | 2 |
   | Catacdegan Nuevo | 2 | 2 | 3 |
   | San Jose Sur | 2 | 3 | 2 |
   | San Juan Norte | 2 | 3 | 2 |
   | San Juan Sur | 2 | 3 | 2 |
   | Catacdegan Viejo | 2 | 1 | 1 |
   | San Jose Norte | 2 | 2 | 1 |
   | Ayyeng | 1 | 3 | 2 |
   | San Ramon East | 1 | 2 | 1 |

2. **Vulnerability Index Raw Data (Table 5.1 - Socio-Economic):**
   | Barangay | Pop. Density (p/km²) | Poverty Incidence (%) | Age Dependency (%) |
   |---|---|---|---|
   | San Ramon East | 83,709.19 | 4.11 | 24 |
   | San Ramon West | 7,398,936.17 (Note: Source anomaly, likely 7,398.93) | 3.41 | 24 |
   | Catacdegan Viejo | 19,958.64 | 3.78 | 34 |
   | San Jose Norte | 16,017.08 | 3.49 | 34 |
   | Luzong | 13,111.02 | 3.13 | 36 |
   | Ayyeng | 12,511.08 | 4.00 | 24 |
   | San Juan Sur | 11,442.98 | 3.83 | 29 |
   | Sto. Tomas | 9,632.19 | 3.70 | 36 |
   | Catacdegan Nuevo | 8,503.12 | 4.13 | 28 |
   | San Jose Sur | 8,223.66 | 2.36 | 29 |
   | San Juan Norte | 7,333.55 | 4.45 | 30 |

3. **Exposure Index Raw Data (Table 6.1 - Physical Exposure):**
   | Barangay | Area Exposed (%) | Pop. in Risk Zone (%) | Infrastructure in Risk Zone (%) |
   |---|---|---|---|
   | Catacdegan Nuevo | 96.14 | 96.14 | 0.00 |
   | San Ramon West | 75.00 | 75.00 | 0.00 |
   | Luzong | 69.62 | 69.62 | 100.00 |
   | San Juan Sur | 40.00 | 40.00 | 0.00 |
   | Sto. Tomas | 36.00 | 36.00 | 67.00 |
   | Catacdegan Viejo | 33.00 | 33.00 | 0.00 |
   | San Juan Norte | 30.00 | 30.00 | 0.00 |
   | San Jose Sur | 25.00 | 25.00 | 0.00 |
   | San Jose Norte | 20.00 | 20.00 | 0.00 |
   | San Ramon East | 10.00 | 10.00 | 33.00 |
   | Ayyeng | 10.00 | 10.00 | 0.00 |

4. **Soft Countermeasures (Table 7.1 - Non-Structural):**
   - **All 11 Barangays have IDENTICAL Scores:**
     - Early Warning System: 1 (Functioning)
     - Evacuation Plan: 1 (Functioning)
     - Flood Education Program: 0 (Absent - This is a critical municipality-wide gap).

5. **Hard Countermeasures (Table 8.1 - Structural - 0 to 1 Scale):**
   | Barangay | Drainage | Flood Control | Infrastructure Elevation |
   |---|---|---|---|
   | Catacdegan Nuevo | 1 | 1 | 1 |
   | Catacdegan Viejo | 1 | 1 | 1 |
   | San Jose Norte | 1 | 1 | 1 |
   | Sto. Tomas | 1 | 1 | 1 |
   | San Juan Norte | 1 | 1 | 1 |
   | San Juan Sur | 1 | 1 | 1 |
   | San Ramon West | 1 | 1 | 1 |
   | San Jose Sur | 0.5 | 1 | 1 |
   | San Ramon East | 1 | 0.5 | 1 |
   | Luzong | 0.5 | 1 | 0 (Critical vulnerability) |
   | Ayyeng | 0 | 1 | 1 |

**Community Perception & Survey Results (Chapter 4):**
- **Hazard Awareness (3.73 - High):** Residents know floods are increasing (Item mean 4.05).
- **Vulnerability Awareness (3.17 - Moderate):** "Optimism Bias" detected. Residents understand health impacts (4.14) but score very low on believing their own household is vulnerable (2.08).
- **Exposure Awareness (2.67 - Moderate):** Residents know climate change is real (4.22) but rarely take action to assess personal exposure (1.55).
- **Soft CM Awareness (4.15 - High):** Value formal education (4.35) but community ties/social capital is the weakest link (3.38).
- **Hard CM Awareness (3.78 - High):** High trust in building codes (4.05) vs lower perception of government investment (3.47).
- **Map Acceptability:** Accuracy (4.04), Content (4.08), Usefulness (3.96). The community and experts highly accept this new map.

**Key Findings & Recommendations:**
1. **Luzong is Critical:** It has the highest FRI (0.766) and Hazard (1.00). It has 100% infrastructure in the risk zone and 0 score for infrastructure elevation.
2. **Education Gap:** While awareness is high, actual Flood Education Programs are non-existent (Score 0). The LGU must implement community education immediately.
3. **Optimism Bias:** Residents generally know about floods but don't think *they* will be hit. Interventions must personalize risk.
4. **Infrastructure Disparity:** Luzong has poor drainage (0.5) compared to others. Ayyeng has 0 drainage score.
5. **San Ramon East is Safe:** It is the "Very Low Risk" area (FRI 0.146) and should be used for evacuation centers and critical hubs.
`;
