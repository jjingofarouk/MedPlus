<Chip 
label={`Confidence: ${result.confidence}% (${result.confidenceLevel})`} 
sx={{ 
  marginLeft: '15px', 
  backgroundColor: result.confidenceColor, 
  color: theme.primary
}} 
/>