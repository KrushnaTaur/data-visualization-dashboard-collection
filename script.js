const dashboards = [

{
  name: "Sales Dashboard",
  description: "Interactive dashboard visualizing company sales trends, revenue growth, and regional performance.",
  icon: "📊",
  live: "./dashboards/sales-dashboard/index.html",
  code: "https://github.com/KrushnaTaur/data-visualization-dashboard-collection/tree/main/dashboards/sales-dashboard"
},

{
  name: "Student Performance Dashboard",
  description: "Analyze student academic performance using subject-wise scores and performance charts.",
  icon: "🎓",
  live: "./dashboards/student-performance-dashboard/index.html",
  code: "https://github.com/KrushnaTaur/data-visualization-dashboard-collection/tree/main/dashboards/student-performance-dashboard"
},

{
  name: "IPL Statistics Dashboard",
  description: "Visual insights into IPL teams, player stats, match results, and tournament trends.",
  icon: "🏏",
  live: "./dashboards/ipl-statistics-dashboard/index.html",
  code: "https://github.com/KrushnaTaur/data-visualization-dashboard-collection/tree/main/dashboards/ipl-statistics-dashboard"
},

{
  name: "Weather Analytics Dashboard",
  description: "Weather trend visualization showing temperature, rainfall, and climate analytics.",
  icon: "🌦️",
  live: "./dashboards/weather-analytics-dashboard/index.html",
  code: "https://github.com/KrushnaTaur/data-visualization-dashboard-collection/tree/main/dashboards/weather-analytics-dashboard"
},

{
  name: "Stock Market Dashboard",
  description: "Visualize stock price trends, market analytics, and financial performance charts.",
  icon: "📈",
  live: "./dashboards/stock-market-dashboard/index.html",
  code: "https://github.com/KrushnaTaur/data-visualization-dashboard-collection/tree/main/dashboards/stock-market-dashboard"
},

{
  name: "Population Growth Dashboard",
  description: "Analyze population growth trends across years and regions using dynamic charts.",
  icon: "🌍",
  live: "./dashboards/population-growth-dashboard/index.html",
  code: "https://github.com/KrushnaTaur/data-visualization-dashboard-collection/tree/main/dashboards/population-growth-dashboard"
},

{
  name: "COVID Data Dashboard",
  description: "Track COVID case trends, recovery rates, and global pandemic statistics visually.",
  icon: "🦠",
  live: "./dashboards/covid-data-dashboard/index.html",
  code: "https://github.com/KrushnaTaur/data-visualization-dashboard-collection/tree/main/dashboards/covid-data-dashboard"
},

{
  name: "Fitness Tracking Dashboard",
  description: "Monitor fitness activities like calories burned, workout time, and daily step analytics.",
  icon: "🏃",
  live: "./dashboards/fitness-tracking-dashboard/index.html",
  code: "https://github.com/KrushnaTaur/data-visualization-dashboard-collection/tree/main/dashboards/fitness-tracking-dashboard"
},

{
  name: "E-commerce Sales Analytics",
  description: "Visualize online store sales performance, customer trends, and product analytics.",
  icon: "🛒",
  live: "./dashboards/ecommerce-sales-analytics/index.html",
  code: "https://github.com/KrushnaTaur/data-visualization-dashboard-collection/tree/main/dashboards/ecommerce-sales-analytics"
},

{
  name: "Social Media Analytics Dashboard",
  description: "Track engagement metrics like followers, likes, impressions, and social growth trends.",
  icon: "📱",
  live: "./dashboards/social-media-analytics-dashboard/index.html",
  code: "https://github.com/KrushnaTaur/data-visualization-dashboard-collection/tree/main/dashboards/social-media-analytics-dashboard"
},

{
  name: "Traffic Analytics Dashboard",
  description: "Analyze website traffic sources, visitor behavior, and engagement metrics.",
  icon: "🚦",
  live: "./dashboards/traffic-analytics-dashboard/index.html",
  code: "https://github.com/KrushnaTaur/data-visualization-dashboard-collection/tree/main/dashboards/traffic-analytics-dashboard"
},

{
  name: "Movie Ratings Dashboard",
  description: "Visual dashboard exploring movie ratings, genres, popularity trends, and reviews.",
  icon: "🎬",
  live: "./dashboards/movie-ratings-dashboard/index.html",
  code: "https://github.com/KrushnaTaur/data-visualization-dashboard-collection/tree/main/dashboards/movie-ratings-dashboard"
}

];



const grid = document.getElementById("dashboardGrid");
const count = document.getElementById("dashboardCount");

dashboards.forEach(dash => {

const card = document.createElement("div");

card.className="dashboard-card";

card.innerHTML=`

<div class="dashboard-icon">${dash.icon}</div>

<h3>${dash.name}</h3>

<p>${dash.description}</p>

<div class="buttons">

<a class="btn live" href="${dash.live}">Open</a>

<a class="btn code" target="_blank" href="${dash.code}">Code</a>

</div>

`;

grid.appendChild(card);

});

count.textContent = dashboards.length;