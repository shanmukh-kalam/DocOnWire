window.addEventListener('resize', function(event) {
    if (window.screen.width < 768){
      toggleSidebar('hide');
    }
    else toggleSidebar('show');
});

window.addEventListener('load', function(event) {
    if (window.screen.width < 768){
        toggleSidebar('hide');
    }
})

function toggleSidebar(state){
    var sidebar = document.getElementsByClassName("sidebar");
    if(state == 'hide') sidebar[0].classList.add("none");
    else sidebar[0].classList.remove("none");
}

function toggleNav(state){
    var main_nav = document.getElementsByClassName("main-section-nav")[0];
    if(state) main_nav.classList.add('nav_open');
    else main_nav.classList.remove('nav_open');
}

function BuildPastConsultChart(){
    const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
        {
            label: 'Consultations',
            data: [2, 5, 4, 1],
            backgroundColor: ['#00adfa', '#11127b', '#0070ff', '#cccccc'],
        }
    ]
    };

    // counter plugin
    const counter = {
        id: 'counter',
        beforeDraw(chart, args, options) {
            const {ctx, chartArea: {top, right, bottom, left, width, height}} = chart;
            ctx.save();
            ctx.font = 'bold ' + options.fontSize + 'px ' + options.fontFamily;
            ctx.textAlign = 'center';
            ctx.fillStyle = options.fontColor;
            ctx.fillText(data.datasets[0].data.reduce((a, b) => a + b, 0), width / 2, (height / 2.5) + (options.fontSize * 0.34));
            ctx.font = options.fontSize - 4 + 'px ' + options.fontFamily;
            ctx.fillText('consultations done', width / 2, (height / 1.9) + (options.fontSize * 0.34));
            ctx.fillText('in last month', width / 2, (height / 1.6) + (options.fontSize * 0.34));
        }
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            cutout: 100,
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                counter: {
                    fontColor: '#11127b',
                    fontFamily: 'Poppins',
                    fontSize: 20
                }
            }
        },
        plugins: [counter]
    };

    var ctx = document.getElementById("past-consult-chart").getContext('2d');
    var past_consult_chart = new Chart(ctx, config);
}

function BuildAnalyticsChart() {
    const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    const data = {
        labels: labels,
        datasets: [
        {
            label: 'Revenue',
            data: [100, 250, 580, 75, 780, 0, 240],
            fill: false,
            borderColor: '#0070ff',
            tension: 0.5
        }]
    };

    const config = {
        type: 'shadowLine',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            elements: {
                point: {
                    radius: 5,
                    backgroundColor: '#fff',
                    hoverRadius: 7,
                    hoverBackgroundColor: '#fff'
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        padding: 15,
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        padding: 15,
                        autoSkip: true,
                        maxTicksLimit: 6
                    }
                }
            }
        },
    };

    var ctx = document.getElementById("analytics-chart").getContext('2d');

    class Custom extends Chart.LineController {
        draw() {
            super.draw(arguments);
            let ctx = this.chart.ctx;
            let _stroke = ctx.stroke;
            ctx.stroke = function() {
                ctx.save();
                ctx.shadowColor = '#cccccc';
                ctx.shadowBlur = 6;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 20;
                _stroke.apply(this, arguments)
                ctx.restore();
            }
        }
    };

    Custom.id = 'shadowLine';
    Custom.defaults = Chart.LineController.defaults;

    Chart.register(Custom);

    var past_consult_chart = new Chart(ctx, config);
}

BuildPastConsultChart();
BuildAnalyticsChart();
