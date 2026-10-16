export interface TodoDto {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export type TodoListDto = TodoDto[];

export type TodoPayloadDto = Omit<TodoDto, "id">;
