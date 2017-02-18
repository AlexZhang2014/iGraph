// Setting a variety of useful variables that will help define how to draw the graph.

// Getting Window Width.
function windowW() {
  var w = $(window).width();
  return w;
};

// Getting Window Height.
function windowH() {
  var h = $(window).height();
  return h;
};

// Defining the Top Margin.
function topM() {
  return 120;
};

// Defining the Right Margin.
function rightM() {
  return 85;
};

// Defining the Bottom Margin.
function bottomM() {
  return 70;
};

// Defining the Left Margin.
function leftM() {
  return 70;
};

// Setting the Default Dataset Keys.
var rDataKey = "population";
var xDataKey = "lifeExpectancy";
var yDataKey = "fertility";

// Setting the Default Date Range.
var firstYear = 1960;
var lastYear = 2014;
var currentYear = 1960;

// These basic string variables are keys for the 'Check Min/Max' function...
// This helps keep code DRY by eliminating the need for two essentially identical functions ('Check Min' and 'Check Max').
var min = "MIN";
var max = "MAX";

// Temporarily hard coded variables for the radius range.
var radiusMin = 7;
var radiusMax = 70;

// Setting the default animation speed.
var speed = 15000;

var overCountry  = false;

// An array of color values.
var colors = ["#3168C5", "#E03621", "#FF9735", "#009634", "#9D0893", "#009AC2", "#E14375", "#000000"];

// A series of arrays to group countries by geographic region and income level using country codes.
var EastAsiaAndPacific = ["ASM", "AUS", "BRN", "KHM", "CHN", "PRK", "FJI", "PYF", "GUM", "HKG", "IDN", "JPN", "KIR", "KOR", "LAO", "MAC", "MYS", "MHL", "FSM", "MNG", "MMR", "NRU", "NCL", "NZL", "MNP", "PLW", "PNG", "PHL", "WSM", "SGP", "SLB", "THA", "TLS", "TON", "TUV", "VUT", "VNM"];
var EuropeAndCentralAsia = ["ALB", "AND", "ARM", "AUT", "AZE", "BLR", "BEL", "BIH", "BGR", "CHI", "HRV", "CYP", "CZE", "DNK", "EST", "FRO", "FIN", "FRA", "GEO", "DEU", "GIB", "GRC", "GRL", "HUN", "ISL", "IRL", "IMN", "ITA", "KAZ", "KSV", "KGZ", "LVA", "LIE", "LTU", "LUX", "MKD", "MDA", "MCO", "MNE", "NLD", "NOR", "POL", "PRT", "ROU", "RUS", "SMR", "SRB", "SVK", "SVN", "ESP", "SWE", "CHE", "TJK", "TUR", "TKM", "UKR", "GBR", "UZB"];
var LatinAmericaAndCaribbean = ["ATG", "ARG", "ABW", "BRB", "BLZ", "BOL", "BRA", "VGB", "CYM", "CHL", "COL", "CRI", "CUB", "CUW", "DMA", "DOM", "ECU", "SLV", "GRD", "GTM", "GUY", "HTI", "HND", "JAM", "MEX", "NIC", "PAN", "PRY", "PER", "PRI", "SXM", "KNA", "LCA", "MAF", "VCT", "SUR", "BHS", "TTO", "TCA", "URY", "VEN", "VIR"];
var MidleEastAndNorthAfrica = ["DZA", "BHR", "DJI", "EGY", "IRN", "IRQ", "ISR", "JOR", "KWT", "LBN", "LBY", "MLT", "MAR", "OMN", "QAT", "SAU", "SYR", "TUN", "ARE", "PSE", "YEM"];
var NorthAmerica = ["BMU", "CAN", "USA"];
var SouthAsia = ["AFG", "BGD", "BTN", "IND", "MDV", "NPL", "PAK", "LKA"];
var SubSaharanAfrica = ["AGO", "BEN", "BWA", "BFA", "BDI", "CPV", "COG", "CIV", "CMR", "CAF", "TCD", "COM", "COD", "GNQ", "ERI", "ETH", "GAB", "GHA", "GIN", "GNB", "KEN", "LSO", "LBR", "MDG", "MWI", "MLI", "MRT", "MUS", "MOZ", "NAM", "NER", "NGA", "RWA", "STP", "SEN", "SYC", "SLE", "SOM", "ZAF", "SSD", "SDN", "SWZ", "TZA", "GMB", "TGO", "UGA", "ZMB", "ZWE"];
var Regions = ["EAS", "ECS", "LCN", "MEA", "NAC", "SAS", "SSF", "ARB", "CEB", "CSS", "EMU", "EUU", "OSS", "PSS", "SST", "WLD"];
var IncomeLevel = ["LIC", "LMC", "LMY", "MIC", "UMC", "HIC", "HPC"];
var RegionsExcludingHighIncome = ["EAP", "ECA", "LAC", "MNA", "SSA"];
var RegionsIDAandIBRD = ["IBT", "TEA", "TEC", "TLA", "TMN", "TSA", "TSS"];
var Other = ["EAR", "FCS", "INX", "LDC", "LTE", "OED", "PRE", "PST", "IBD", "IDA", "IDB", "IDX"];