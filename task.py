import datetime
import json
from dataclasses import dataclass, asdict
from typing import List, Optional
import os

@dataclass
class Task:
    description: str
    created_at: datetime.datetime
    due_date: Optional[datetime.datetime] = None
    completed_at: Optional[datetime.datetime] = None
    priority: int = 1  # 1 (lowest) to 5 (highest)
    tags: List[str] = None

    def to_dict(self):
        return {k: str(v) if isinstance(v, datetime.datetime) else v for k, v in asdict(self).items()}

    @classmethod
    def from_dict(cls, data):
        data['created_at'] = datetime.datetime.fromisoformat(data['created_at'])
        data['due_date'] = datetime.datetime.fromisoformat(data['due_date']) if data['due_date'] else None
        data['completed_at'] = datetime.datetime.fromisoformat(data['completed_at']) if data['completed_at'] else None
        return cls(**data)

class ToDoList:
    def __init__(self):
        self.tasks: List[Task] = []
        self.filename = "todo_list.json"
        self.load_tasks()

    def add_task(self, description: str, due_date: Optional[str] = None, priority: int = 1, tags: List[str] = None):
        due_date_obj = datetime.datetime.fromisoformat(due_date) if due_date else None
        task = Task(description, datetime.datetime.now(), due_date_obj, priority=priority, tags=tags or [])
        self.tasks.append(task)
        self.save_tasks()
        print(f"Task '{description}' added.")

    def view_tasks(self, sort_by: str = 'created_at', filter_tag: Optional[str] = None):
        if not self.tasks:
            print("No tasks in the list.")
            return

        filtered_tasks = [task for task in self.tasks if not filter_tag or filter_tag in task.tags]
        sorted_tasks = sorted(filtered_tasks, key=lambda x: getattr(x, sort_by))

        for index, task in enumerate(sorted_tasks, 1):
            status = "✓" if task.completed_at else " "
            due_str = f", Due: {task.due_date.date()}" if task.due_date else ""
            tags_str = f", Tags: {', '.join(task.tags)}" if task.tags else ""
            print(f"{index}. [{status}] {task.description} (Priority: {task.priority}{due_str}{tags_str})")

    def mark_completed(self, task_index: int):
        if 1 <= task_index <= len(self.tasks):
            task = self.tasks[task_index - 1]
            task.completed_at = datetime.datetime.now()
            self.save_tasks()
            print(f"Task '{task.description}' marked as completed.")
        else:
            print("Invalid task index.")

    def remove_task(self, task_index: int):
        if 1 <= task_index <= len(self.tasks):
            removed_task = self.tasks.pop(task_index - 1)
            self.save_tasks()
            print(f"Task '{removed_task.description}' removed.")
        else:
            print("Invalid task index.")

    def edit_task(self, task_index: int):
        if 1 <= task_index <= len(self.tasks):
            task = self.tasks[task_index - 1]
            print(f"Editing task: {task.description}")

            new_description = input(f"New description ({task.description}): ") or task.description
            new_due_date = input(f"New due date ({task.due_date or 'None'}, format YYYY-MM-DD): ")
            new_priority = input(f"New priority ({task.priority}): ") or task.priority
            new_tags = input(f"New tags (comma-separated, current: {', '.join(task.tags)}): ")

            task.description = new_description
            task.due_date = datetime.datetime.fromisoformat(new_due_date) if new_due_date else task.due_date
            task.priority = int(new_priority)
            task.tags = [tag.strip() for tag in new_tags.split(',')] if new_tags else task.tags

            self.save_tasks()
            print("Task updated successfully.")
        else:
            print("Invalid task index.")

    def save_tasks(self):
        with open(self.filename, 'w') as f:
            json.dump([task.to_dict() for task in self.tasks], f)

    def load_tasks(self):
        if os.path.exists(self.filename):
            with open(self.filename, 'r') as f:
                self.tasks = [Task.from_dict(task_dict) for task_dict in json.load(f)]

def get_input(prompt: str, validator=None, error_message: str = "Invalid input. Please try again."):
    while True:
        user_input = input(prompt)
        if validator is None or validator(user_input):
            return user_input
        print(error_message)

def main():
    todo_list = ToDoList()

    while True:
        print("\n--- Advanced To-Do List Manager ---")
        print("1. Add Task")
        print("2. View Tasks")
        print("3. Mark Task as Completed")
        print("4. Remove Task")
        print("5. Edit Task")
        print("6. Quit")

        choice = get_input("Enter your choice (1-6): ", lambda x: x in '123456')

        if choice == '1':
            description = get_input("Enter the task description: ")
            due_date = get_input("Enter due date (YYYY-MM-DD) or press Enter to skip: ",
                                 lambda x: not x or datetime.datetime.strptime(x, "%Y-%m-%d"))
            priority = int(get_input("Enter priority (1-5): ", lambda x: x in '12345'))
            tags = get_input("Enter tags (comma-separated) or press Enter to skip: ")
            todo_list.add_task(description, due_date, priority, tags.split(',') if tags else None)
        elif choice == '2':
            sort_by = get_input("Sort by (created_at/due_date/priority): ",
                                lambda x: x in ['created_at', 'due_date', 'priority'])
            filter_tag = input("Filter by tag (or press Enter to show all): ")
            todo_list.view_tasks(sort_by, filter_tag if filter_tag else None)
        elif choice == '3':
            todo_list.view_tasks()
            task_index = int(get_input("Enter the task number to mark as completed: ", lambda x: x.isdigit()))
            todo_list.mark_completed(task_index)
        elif choice == '4':
            todo_list.view_tasks()
            task_index = int(get_input("Enter the task number to remove: ", lambda x: x.isdigit()))
            todo_list.remove_task(task_index)
        elif choice == '5':
            todo_list.view_tasks()
            task_index = int(get_input("Enter the task number to edit: ", lambda x: x.isdigit()))
            todo_list.edit_task(task_index)
        elif choice == '6':
            print("Thank you for using the Advanced To-Do List Manager. Goodbye!")
            break

if __name__ == "__main__":
    main()
