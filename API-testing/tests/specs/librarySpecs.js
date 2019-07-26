describe("Library Function Test", describe("Fetch users", function(){
    it("should be able to fetch users", function(done){
        getUsersAysnc(function(data) {
            expect(data.length).toBeGreaterThan(0);
            expect(data[0].gender).toBeDefined();
            expect(data[0].gender).not.toBe(null);
            expect(data[0].hasOwnProperty('gender')).toBe(true);
            done();
        })
    })
}));