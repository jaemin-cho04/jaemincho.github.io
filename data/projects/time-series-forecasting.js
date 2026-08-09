export const timeSeriesForecastingProject = {
  contributions: [
    {
      number: "01",
      title: "Prepare the timeline",
      summary: "Converted German energy records into a supervised, one-hour-ahead forecasting dataset.",
      approach: [
        "Preserved chronology with a 70/15/15 train, validation, and test split.",
        "Fitted standardization on training data and created 24-hour sliding windows.",
      ],
    },
    {
      number: "02",
      title: "Benchmark architectures",
      summary: "Compared recurrent and convolutional sequence models under the same forecast task.",
      approach: [
        "Evaluated stacked LSTM, GRU, and residual dilated TCN architectures.",
        "Used validation results, early stopping, and targeted hyperparameter searches.",
      ],
    },
    {
      number: "03",
      title: "Test feature value",
      summary: "Measured whether renewable generation and calendar context improved load-only forecasts.",
      approach: [
        "Compared univariate and multivariate GRUs on the same held-out period.",
        "Wind, solar, hour, weekday, and month inputs reduced GRU MAE by 16.51%.",
      ],
    },
  ],
};

export default timeSeriesForecastingProject;
