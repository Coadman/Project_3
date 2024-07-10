// Define the URLs for the CSV files
const medicaidURL = 'https://raw.githubusercontent.com/Coadman/Project_3/main/csv_to_import/medicaid_yearly_spendings.csv';
const medicareURL = 'https://raw.githubusercontent.com/Coadman/Project_3/main/csv_to_import/medicare_yearly_spendings.csv';

// Load the Medicaid spending data
d3.csv(medicaidURL).then(function(medicaidData) {
    // Load the Medicare spending data
    d3.csv(medicareURL).then(function(medicareData) {
        const combinedData = [...medicaidData, ...medicareData];
        combinedData.sort((a, b) => a.Year - b.Year);

        // Calculate the maximum spending value per year
        const maxSpendingByYear = d3.rollup(
            combinedData,
            v => d3.max(v, d => d.Tot_Spndng),
            d => d.Year
        );

        // Get the top 5 values based on the highest dollar value
        const top5Data = combinedData.sort((a, b) => b.Tot_Spndng - a.Tot_Spndng).slice(0, 5);
        
        // Filter to show only manufacturer, total spending, and year
        const filteredData = top5Data.map(d => ({
            Manufacturer: d.Mftr_Name,
            TotalSpending: +d.Tot_Spndng,
            Year: +d.Year
        }));

        // Set up chart dimensions
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const width = 600 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        // Create SVG container
        const svg = d3.select('body').append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Define x and y scales
        const x0 = d3.scaleBand()
            .domain(filteredData.map(d => d.Mftr_Name))
            .range([0, width])
            .padding(0.1);
        
        const x1 = d3.scaleBand()
            .domain(['Medicaid', 'Medicare'])
            .rangeRound([0, x0.bandwidth()])
            .padding(0.05);

        const y = d3.scaleLinear()
            .domain([0, d3.max(filteredData, d => d.TotSpndng)])
            .nice()
            .range([height, 0]);

        // Create bars
        const group = svg.selectAll('.group')
            .data(filteredData)
            .enter().append('g')
            .attr('class', 'group')
            .attr('transform', d => `translate(${x0(d.Mftr_Name)},0)`);

        group.selectAll('.bar1')
            .data(d => [d.Medicaid])
            .enter().append('rect')
            .attr('class', 'bar1')
            .attr('x', x1('Medicaid'))
            .attr('y', d => y(d))
            .attr('width', x1.bandwidth())
            .attr('height', d => height - y(d))
            .attr('fill', 'steelblue');

        group.selectAll('.bar2')
            .data(d => [d.Medicare])
            .enter().append('rect')
            .attr('class', 'bar2')
            .attr('x', x1('Medicare'))
            .attr('y', d => y(d))
            .attr('width', x1.bandwidth())
            .attr('height', d => height - y(d))
            .attr('fill', 'darkorange');

        // Add axes
        svg.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})`)
                .call(d3.axisBottom(x0));

        svg.append('g')
            .attr('class', 'y-axis')
                .call(d3.axisLeft(y));
    });
});