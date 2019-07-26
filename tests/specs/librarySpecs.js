describe("Library Function Test", describe("Fetch users", function(){
    it("should be able to fetch users", function(done){
        getUsersAysnc(function(data) {
            expect(data.length).toBeGreaterThan(0);
            done();
        })
    })
}));