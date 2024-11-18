import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Button, TextField, Select, MenuItem, Card, CardContent, CardHeader, CardActions, Typography } from '@material-ui/core';

// GraphQL Queries & Mutations
const GET_MEAL_PLANS = gql`
  query GetMealPlans($userId: ID!) {
    mealPlans(userId: $userId) {
      id
      name
      description
      meals {
        id
        name
        calories
        protein
        carbs
        fat
      }
    }
  }
`;

const ADD_MEAL_PLAN = gql`
  mutation AddMealPlan($userId: ID!, $name: String!, $description: String!) {
    addMealPlan(userId: $userId, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

const ADD_MEAL = gql`
  mutation AddMeal($mealPlanId: ID!, $name: String!, $calories: Int!, $protein: Int!, $carbs: Int!, $fat: Int!) {
    addMeal(mealPlanId: $mealPlanId, name: $name, calories: $calories, protein: $protein, carbs: $carbs, fat: $fat) {
      id
      name
      calories
      protein
      carbs
      fat
    }
  }
`;

const Meals = () => {
  const userId = "user-123"; // Replace with actual userId from context
  const { data = { mealPlans: [] }, loading, error, refetch} = useQuery(GET_MEAL_PLANS, { variables: { userId } });
  const [addMealPlan] = useMutation(ADD_MEAL_PLAN);
  const [addMeal] = useMutation(ADD_MEAL);

  const [newMealPlan, setNewMealPlan] = useState({ name: '', description: '' });
  const [newMeal, setNewMeal] = useState({ name: '', calories: '', protein: '', carbs: '', fat: '' });
  const [selectedMealPlan, setSelectedMealPlan] = useState(null);

  useEffect(() => {
    if (data && data.mealPlans.length > 0) {
      setSelectedMealPlan(data.mealPlans[0].id); // Automatically select the first meal plan
    }
  }, [data]);

  const handleAddMealPlan = async () => {
    await addMealPlan({ variables: { userId, name: newMealPlan.name, description: newMealPlan.description } });
    setNewMealPlan({ name: '', description: '' });
    refetch();
  };

  const handleAddMeal = async () => {
    if (selectedMealPlan) {
      await addMeal({
        variables: {
          mealPlanId: selectedMealPlan,
          name: newMeal.name,
          calories: parseInt(newMeal.calories),
          protein: parseInt(newMeal.protein),
          carbs: parseInt(newMeal.carbs),
          fat: parseInt(newMeal.fat)
        }
      });
      setNewMeal({ name: '', calories: '', protein: '', carbs: '', fat: '' });
      refetch();
    }
  };


  return (
    <div className="meal-plan-manager">
      <Typography variant="h4" gutterBottom>Manage Your Meal Plans</Typography>

      {/* Add New Meal Plan */}
      <Card style={{ marginBottom: '20px' }}>
        <CardHeader title="Create New Meal Plan" />
        <CardContent>
          <TextField
            label="Meal Plan Name"
            value={newMealPlan.name}
            onChange={(e) => setNewMealPlan({ ...newMealPlan, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={newMealPlan.description}
            onChange={(e) => setNewMealPlan({ ...newMealPlan, description: e.target.value })}
            fullWidth
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={handleAddMealPlan}>
            Add Meal Plan
          </Button>
        </CardActions>
      </Card>

      {/* Meal Plan Dropdown */}
      {data && data.mealPlans.length > 0 && (
        <Select
          value={selectedMealPlan}
          onChange={(e) => setSelectedMealPlan(e.target.value)}
          fullWidth
          style={{ marginBottom: '20px' }}
        >
          {data.mealPlans.map((plan) => (
            <MenuItem key={plan.id} value={plan.id}>
              {plan.name} - {plan.description}
            </MenuItem>
          ))}
        </Select>
      )}

      {/* Add New Meal */}
      <Card style={{ marginBottom: '20px' }}>
        <CardHeader title="Add Meal to Selected Plan" />
        <CardContent>
          <TextField
            label="Meal Name"
            value={newMeal.name}
            onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Calories"
            value={newMeal.calories}
            onChange={(e) => setNewMeal({ ...newMeal, calories: e.target.value })}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            label="Protein (g)"
            value={newMeal.protein}
            onChange={(e) => setNewMeal({ ...newMeal, protein: e.target.value })}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            label="Carbs (g)"
            value={newMeal.carbs}
            onChange={(e) => setNewMeal({ ...newMeal, carbs: e.target.value })}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            label="Fat (g)"
            value={newMeal.fat}
            onChange={(e) => setNewMeal({ ...newMeal, fat: e.target.value })}
            fullWidth
            margin="normal"
            type="number"
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={handleAddMeal}>
            Add Meal
          </Button>
        </CardActions>
      </Card>

      {/* Display Meal Plans */}
      <div className="meal-plan-list">
        {data && data.mealPlans.map((plan) => (
          <Card key={plan.id} style={{ marginBottom: '20px' }}>
            <CardHeader title={plan.name} subheader={plan.description} />
            <CardContent>
              <Typography variant="h6">Meals:</Typography>
              {plan.meals.length > 0 ? (
                plan.meals.map((meal) => (
                  <Typography key={meal.id}>
                    {meal.name} - {meal.calories} kcal, {meal.protein}g protein, {meal.carbs}g carbs, {meal.fat}g fat
                  </Typography>
                ))
              ) : (
                <Typography>No meals added yet.</Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Meals;
