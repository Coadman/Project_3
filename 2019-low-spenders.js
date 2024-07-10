// Define the URLs for the CSV files
const medicaidURL = 'https://raw.githubusercontent.com/Coadman/Project_3/main/csv_to_import/medicaid_yearly_spendings.csv';
const medicareURL = 'https://raw.githubusercontent.com/Coadman/Project_3/main/csv_to_import/medicare_yearly_spendings.csv';

// Load the Medicaid spending data
d3.csv(medicaidURL).then(function(data) {
    let medicaidSpending = data.sort((a, b) => a.Tot_Spndng - b.Tot_Spndng);
    let filteredMedicaid = data.filter(row => row.Year === "2019");
    let medicaid2019 = filteredMedicaid.map(row => ({
        Mftr_Name: row.Mftr_Name,
        Tot_Spndng: +row.Tot_Spndng
    }));

    let lowSpendersMedicaid = medicaid2019.slice(0, 5);

    // Load the Medicare spending data
    d3.csv(medicareURL).then(function(data) {
        let medicareSpending = data.sort((a, b) => a.Tot_Spndng - b.Tot_Spndng);
        let filteredMedicare = data.filter(row => row.Year === "2019");
        let medicare2019 = filteredMedicare.map(row => ({
            Mftr_Name: row.Mftr_Name,
            Tot_Spndng: +row.Tot_Spndng
        }));

        let lowSpendersMedicare = medicare2019.slice(0, 5);

        // Combine Medicaid and Medicare spending data for the grouped bar chart
        let combinedData = lowSpendersMedicaid.map((d, i) => ({
            Mftr_Name: d.Mftr_Name,
            Medicaid: d.Tot_Spndng,
            Medicare: lowSpendersMedicare[i].Tot_Spndng
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

        // Define scales
        const x0 = d3.scaleBand()
            .domain(combinedData.map(d => d.Mftr_Name))
            .rangeRound([0, width])
            .paddingInner(0.1);

        const x1 = d3.scaleBand()
            .domain(['Medicaid', 'Medicare'])
            .rangeRound([0, x0.bandwidth()])
            .padding(0.05);

        const y = d3.scaleLinear()
            .domain([0, d3.max(combinedData, d => Math.max(d.Medicaid, d.Medicare))])
            .nice()
            .rangeRound([height, 0]);

        // Create bars
        const group = svg.selectAll('.group')
            .data(combinedData)
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