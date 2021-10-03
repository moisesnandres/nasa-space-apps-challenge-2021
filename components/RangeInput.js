import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function VerticalSlider() {
  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

  return (
    <div className="range-container wrapper">
      <Box sx={{ height: 300 }}>
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: 'slider-vertical',
            },
          }}
          orientation="vertical"
          defaultValue={30}
          aria-label="Temperature"
          onKeyDown={preventHorizontalKeyboardNavigation}
          marks={[
            {
              value: 0,
              label: 'Low',
            },
            {
              value: 100,
              label: 'High',
            },
          ]}
        />
      </Box>
      <div className="range-name">Plastic Debris Concentration</div>
    </div>
  );
}
