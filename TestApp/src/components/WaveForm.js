import React, { useMemo } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Svg, { Rect, Defs, ClipPath } from 'react-native-svg';

const barWidth = 4;
const barMargin = 1;
const { width: wWidth } = Dimensions.get('window');
const offset = wWidth / 2;

const WaveForm = ({ waveform, color, progress }) => {
  const width = useMemo(() => waveform.width * (barWidth + barMargin) + offset, [
    waveform.width,
  ]);
  const height = useMemo(
    () => waveform.height + barMargin + waveform.height * 0.61,
    [waveform.height]
  );

  const x = progress
    ? progress.interpolate({
        inputRange: [0, width - wWidth - offset, width - wWidth],
        outputRange: [`${-width + offset}`, `${-wWidth}`, '0'],
      })
    : 0;

  return (
    <Svg width={width} height={height}>
      <Defs>
        <ClipPath id="progress">
          <Rect width={width} height={height} x={x} />
        </ClipPath>
      </Defs>
      {waveform.samples.map((sample, key) => (
        <React.Fragment key={key}>
          <Rect
            clipPath="url(#progress)"
            y={waveform.height - sample}
            x={key * (barWidth + barMargin) + offset}
            fill={color}
            height={sample}
            width={barWidth}
          />
          <Rect
            clipPath="url(#progress)"
            y={waveform.height + barMargin}
            x={key * (barWidth + barMargin) + offset}
            fill={color}
            fillOpacity={0.5}
            height={sample * 0.61}
            width={barWidth}
          />
        </React.Fragment>
      ))}
    </Svg>
  );
};

const styles = StyleSheet.create({});

export default WaveForm;