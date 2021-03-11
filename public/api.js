const API = {
    async getLastFitness() {
      let res;
      try {
        res = await fetch("/api/fitness");
      } catch (err) {
        console.log(err)
      }
      const json = await res.json();
  
      return json[json.length - 1];
    },
    async addExercise(data) {
      const id = location.search.split("=")[1];
  
      const res = await fetch("/api/fitness/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
  
      const json = await res.json();
  
      return json;
    },
    async createWorkout(data = {}) {
      const res = await fetch("/api/fitness", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
  
      const json = await res.json();
  
      return json;
    },
  
    async getFitnessInRange() {
      const res = await fetch(`/api/fitness/range`);
      const json = await res.json();
  
      return json;
    },
  };
  