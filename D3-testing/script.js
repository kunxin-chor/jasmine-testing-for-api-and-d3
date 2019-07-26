    queue()
        .defer(d3.json, "data/transactions.json")
        .await(makeGraphs);

    // INPUT: a crossfilter
    // OUTPUT: the min date and the maximum date
    function getMinAndMaxDate(ndx)
    {
        // use ndx to create a date_dim
        var date_dim = ndx.dimension(function(d){
            return d.date;
        });
        
        var min_date = date_dim.bottom(1)[0].date;
        var max_date = date_dim.top(1)[0].date;
        
        return {
            'min_date': min_date,
            'max_date': max_date
        }
    }

    function massageDates(transactionsData)
    {
        var parseDate = d3.time.format("%d/%m/%Y").parse;

        transactionsData.forEach(function(d){
            d.date = parseDate(d.date);
        });
        
        return transactionsData;
    }

    function makeGraphs(error, transactionsData) {
        // ndx is a crossfilter variable
        var ndx = crossfilter(transactionsData);
        
        transactionData = massageDates(transactionsData);
        let dates = getMinAndMaxDate(ndx);
        
        var spend_dim = ndx.dimension(function(d){
            return [d.date, d.spend];
        });
        
        var spend_group = spend_dim.group();
        var spend_chart = dc.scatterPlot("#scatter-plot");
        
        spend_chart
            .width(768)
            .height(480)
            .x(d3.time.scale().domain([dates.min_date, dates.max_date]))
            .brushOn(false)
            .symbolSize(8)
            .clipPadding(10)
            .yAxisLabel("Amount Spent")
            .dimension(spend_dim)
            .group(spend_group);
            
        dc.renderAll();
    }