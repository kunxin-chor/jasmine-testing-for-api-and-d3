describe("Library Function Test", describe("Fetch users", function(){
    it("should be able to fetch users", function(){
        getUsersAysnc(function(data) {
            expect(data.length).toBeGreaterThan(0)
        })
    })
}));