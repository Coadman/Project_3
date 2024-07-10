

// Define the URLs for the CSV files
const medicaidURL = 'https://raw.githubusercontent.com/Coadman/Project_3/main/csv_to_import/medicaid_yearly_spendings.csv';
const medicareURL = 'https://raw.githubusercontent.com/Coadman/Project_3/main/csv_to_import/medicare_yearly_spendings.csv';

d3.csv(medicaidURL).then(function(data) {
    let medicaidSpending = data.sort((a, b) => b.Tot_Spndng - a.Tot_Spndng);
    let filteredMedicaid = data.filter(row => row.Year === "2019");
    let medicaid2019 = filteredMedicaid.map(row => ({
        Mftr_Name: row.Mftr_Name,
        Tot_Spndng: +row.Tot_Spndng
    }));

    let bigSpendersMedicaid = medicaid2019.slice(0, 5);

    // Load the Medicare spending data
    d3.csv(medicareURL).then(function(data) {
        let medicareSpending = data.sort((a, b) => b.Tot_Spndng - a.Tot_Spndng);
        let filteredMedicare = data.filter(row => row.Year === "2019");
        let medicare2019 = filteredMedicare.map(row => ({
            Mftr_Name: row.Mftr_Name,
            Tot_Spndng: +row.Tot_Spndng
        }));

        let bigSpendersMedicare = medicare2019.slice(0, 5);

        // Combine Medicaid and Medicare spending data for the grouped bar chart
        let combinedData = bigSpendersMedicaid.map((d, i) => ({
            Mftr_Name: d.Mftr_Name,
            Medicaid: d.Tot_Spndng,
            Medicare: bigSpendersMedicare[i].Tot_Spndng
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
        const x = d3.scaleLinear()
            .domain(d3.extent(bigSpendersMedicaid, d => d[0]))
            .range([0, width]);
        
        const x2 = d3.scaleLinear()
            .domain(d3.extent(bigSpendersMedicare, d => d[1]))
            .range([0, width]);

            const y = d3.scaleLinear()
            .domain([0, d3.max(combinedData, d => Math.max(d.Medicaid, d.Medicare))])
            .nice()
            .rangeRound([height, 0]);

        // Define the line function
        const line = d3.line()
            .x(d => x(d[0]))
            .y(d => y(d[1]));

        // Create the line
        svg.append('path')
            .datum(combinedData)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 2)
            .attr('d', line);

        // Add axes
        svg.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})`)
                .call(d3.axisBottom(x));

        svg.append('g')
            .attr('class', 'y-axis')
                .call(d3.axisLeft(y));
        // Add labels, titles, etc. to your plot
        svg.append("text")
            .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 20) + ")")
            .style("text-anchor", "middle")
            .text("Years");    
    });
});