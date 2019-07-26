describe("Scatter Plot", function(){
    describe("Convert date columns to date", function(){
        it("Should convert 1/9/2018 such that day is 1, month is 9 and year is 2018", function(){
            let data = [
                {value:99, date:'1/9/2018'}
            ]
            
            data = massageDates(data);
            expect( moment(data[0].date).format('Y')).toBe('2018')
            expect( moment(data[0].date).format("D")).toBe('1')
            expect( moment(data[0].date).format("M")).toBe('9')
            
        })
    
        it("Should not crash on invalid dates", function(){
               let data = [
                {value:99, date:'1/9/-208'}
            ]
             data = massageDates(data);
            expect( data[0].date).toBeNull();
        })
    })
    describe("Can get min and max date", function()
    {
        let data = [
            {value:3, date:'1/9/2018'},
            {value:5, date:'2/11/2018'},
            {value:11, date:'3/5/2019'},
            {value:12, date:'1/6/1982'}
        ]
        
        it("should get the min and max date", function(){
            let ndx = crossfilter(data);
            let dates = getMinAndMaxDate(ndx);
            expect(dates.min_date).toBe('1/6/1982')
            expect(dates.max_date).toBe('3/5/2019')
        })
        
        it("should get min and max date if all dates are the same", function(){
            let d2 = [
                {value:3, date:'1/9/2018'},
                {value:5, date:'1/9/2018'},
                {value:11, date:'1/9/2018'},
                {value:12, date:'1/9/2018'}
            ];
            
            let ndx = crossfilter(d2);
            let dates = getMinAndMaxDate(ndx);
            expect(dates.min_date == dates.max_date).toBe(true)
        })
    })
})