import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import  Button  from "../ui/button";
import  Progress  from "../ui/Progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { AlertCircle, Activity, Zap, Moon, Sun, RotateCcw, Calendar, Utensils, Heart } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { format, subDays, eachDayOfInterval } from 'date-fns';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const generateRandomData = (days) => {
  return Array.from({ length: days }, (_, i) => ({
    date: format(subDays(new Date(), days - 1 - i), 'yyyy-MM-dd'),
    score: Math.floor(Math.random() * 30) + 70,
    sleep: Math.floor(Math.random() * 4) + 5,
    steps: Math.floor(Math.random() * 5000) + 5000,
    calories: Math.floor(Math.random() * 500) + 1500,
    heartRate: Math.floor(Math.random() * 20) + 60,
  }));
};

const nutritionData = [
  { name: 'Protein', value: 30 },
  { name: 'Carbs', value: 50 },
  { name: 'Fats', value: 20 },
];

const InsightsLink = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('score');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = useCallback(() => {
    setRefreshing(true);
    // Simulating API call
    setTimeout(() => {
      const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
      setData(generateRandomData(days));
      setRefreshing(false);
    }, 1000);
  }, [timeRange]);

  useEffect(() => {
    fetchData();
  }, [fetchData, timeRange]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const averageMetric = useMemo(() => {
    return (data.reduce((sum, day) => sum + day[selectedMetric], 0) / data.length).toFixed(2);
  }, [data, selectedMetric]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-background border border-border p-2 rounded-md shadow-md">
          <p className="label font-bold">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>{`${entry.name}: ${entry.value}`}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderLineChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey={selectedMetric} stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );

  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey={selectedMetric} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );

  const renderNutritionChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={nutritionData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {nutritionData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );

  return (
    <Card className={`w-full max-w-5xl mx-auto ${darkMode ? 'dark' : ''}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Advanced Health Insights</CardTitle>
        <div className="flex space-x-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" onClick={fetchData} disabled={refreshing}>
            <RotateCcw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
          </Button>
          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="line" className="space-y-4">
          <TabsList>
            <TabsTrigger value="line">Line Chart</TabsTrigger>
            <TabsTrigger value="bar">Bar Chart</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          </TabsList>
          <TabsContent value="line">{renderLineChart()}</TabsContent>
          <TabsContent value="bar">{renderBarChart()}</TabsContent>
          <TabsContent value="nutrition">{renderNutritionChart()}</TabsContent>
        </Tabs>

        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-between">
            <Select value={selectedMetric} onValueChange={setSelectedMetric}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select metric" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="score">Health Score</SelectItem>
                <SelectItem value="sleep">Sleep</SelectItem>
                <SelectItem value="steps">Steps</SelectItem>
                <SelectItem value="calories">Calories</SelectItem>
                <SelectItem value="heartRate">Heart Rate</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm font-medium">Average: {averageMetric}</span>
          </div>
          <Progress value={parseFloat(averageMetric)} max={selectedMetric === 'steps' ? 10000 : 100} className="w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Activity</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data[data.length - 1]?.steps.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">steps today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sleep</CardTitle>
              <Moon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data[data.length - 1]?.sleep}</div>
              <p className="text-xs text-muted-foreground">hours last night</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data[data.length - 1]?.heartRate}</div>
              <p className="text-xs text-muted-foreground">bpm (average)</p>
            </CardContent>
          </Card>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button className="mt-4">View Detailed Report</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Detailed Health Report</DialogTitle>
              <DialogDescription>
                Here's a summary of your health metrics for the selected time range.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="col-span-2">Average Health Score:</span>
                <span className="col-span-2 font-bold">{averageMetric}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="col-span-2">Total Steps:</span>
                <span className="col-span-2 font-bold">{data.reduce((sum, day) => sum + day.steps, 0).toLocaleString()}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="col-span-2">Average Sleep:</span>
                <span className="col-span-2 font-bold">{(data.reduce((sum, day) => sum + day.sleep, 0) / data.length).toFixed(2)} hours</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default InsightsLink;