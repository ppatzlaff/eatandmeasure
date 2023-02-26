//import {Food} from "@/interfaces/Food";

export class FoodService {

  private baseURL: string = "http://127.0.0.1:5000/api/food";

  async get(): Promise<any> {
    const result = await fetch(`${this.baseURL}`);
    const finalResult = await result.json();
    return finalResult;
  }

  async create(newFood: any): Promise<any> {
    const result = await fetch(`${this.baseURL}`,
      {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
              method: "POST",
              body: JSON.stringify(newFood)
            }
    );
  }

  async update(food: any): Promise<any> {
    const result = await fetch(`${this.baseURL}/${food}`,
      {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
              method: "PUT",
              body: JSON.stringify(food)
            }
    );
  }

  async delete(foodId: number): Promise<any> {
    await fetch(`${this.baseURL}/${foodId}`, { method: 'DELETE' });
  }

}
