const ResultList = ({ results }) => (
    <div>
      {results.map((result) => (
        <Paper key={result.condition} style={{ padding: '10px', margin: '10px 0' }}>
          <Typography variant="h6">{result.condition}</Typography>
          <Typography variant="body2" color="textSecondary">
            Confidence: <span style={{ color: result.confidenceColor }}>{result.confidenceLevel}</span>
          </Typography>
        </Paper>
      ))}
    </div>
  );
  