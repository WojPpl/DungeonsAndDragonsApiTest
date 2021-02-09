import fetcher from "./API";

describe('Dungeons api', () => {
  it('should return data', () => {
    return fetcher("https://www.dnd5eapi.co/api/classes")
        .then(response => {
          expect(response).toBeDefined()
        })
  });
  it('should throw errow with bad url', () => {
    return fetcher("https://www.dnd5eapi.co/api/klasy")
        .catch((error) => {
          expect(error).toBeDefined()
        })
  });
  it('should contain valid profession names', () => {
    return fetcher("https://www.dnd5eapi.co/api/classes")
        .then(response => {
          response.data.results.forEach(profession => {
            expect(profession.index.toUpperCase()).toBe(profession.name.toUpperCase())
          })
        })
  });
  it('should return declared number of professions', () => {
    return fetcher("https://www.dnd5eapi.co/api/classes")
            .then(response => {
                    expect(response.data.count).toEqual(response.data.results.length)
            })
    });
  it('results object should contain index, name and url keys', () => {
    return fetcher("https://www.dnd5eapi.co/api/classes")
        .then(response => { //
          response.data.results.forEach(profession => {
            expect(Object.keys(profession)).toContain("name");
            expect(Object.keys(profession)).toContain("url");
            expect(Object.keys(profession)).toContain("index");
          })
        })
  });
})