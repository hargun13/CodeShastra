import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextArea from './TextArea';
import Doughnut from './Charts/DoughnutChart';
import { TiTickOutline } from 'react-icons/ti';
import { SentimentIntensityAnalyzer } from 'vader-sentiment';
import audio from './intro-video-1.mp3'
import OpenAI from "openai";
// import fs from "fs";
// import { createReadStream } from 'fs';



function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', borderRadius: '100%' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          border: '2px',
          boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography variant="h6" component="div" color="text.secondary" textAlign="center">
          {`${Math.round(props.value)}`}<br /><span className='text-[10px] font-bold'>SkillX Score</span>
        </Typography>
      </Box>
    </Box>
  );
}

const CandidateNotes = () => {
  const [progress, setProgress] = useState(90);
  const [sentiment, setSentiment] = useState('');
  const openai = new OpenAI({ apiKey: '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' , dangerouslyAllowBrowser: true });

  // async function main() {
  //   const transcription = await openai.audio.transcriptions.create({
  //     file: createReadStream(audio),
  //     model: "whisper-1",
  //   });

  //   console.log(transcription.text);
  // }
  

  useEffect(() => {
    // main();
    // Example transcribed text, replace with your actual transcription
    const transcribedText = "I am a very good boy and will do good work for the company";

    // Perform sentiment analysis
    const result = SentimentIntensityAnalyzer.polarity_scores(transcribedText);

    // Set sentiment state based on analysis
    if (result.compound >= 0.05) {
      setSentiment('Positive');
    } else if (result.compound <= -0.05) {
      setSentiment('Negative');
    } else {
      setSentiment('Neutral');
    }
  }, []);

  return (
    <div className='w-[30%] h-[85vh] flex flex-col items-between justify-between'>
      <div className='rounded-xl h-[42vh] bg-white shadow-2xl p-5'>
        <div className='flex gap-5'>
          <CircularProgressWithLabel value={progress} size={100} />
          <Doughnut />
          <p className='text-center mt-5'>
            <p className='text-2xl font-bold'>88/100</p>
            <p className='text-sm'>Learning Streak</p>
          </p>
        </div>

        <div className='mt-7'>
          <p className='border-b border-gray-200 pb-2 flex items-center gap-2 font-bold text-green-500 text-xl'>
            <TiTickOutline size={30} /> 80% Profile Match!!
          </p>
        </div>

        <div className='mt-5'>
          <p className='font-bold text-xl'>Sentiment Analysis:</p>
          <p className='text-lg'>{sentiment}</p>
        </div>
      </div>

      <div className='rounded-xl h-[42vh] bg-white shadow-2xl p-5'>
        <TextArea />
      </div>

    </div>
  );
};

export default CandidateNotes;
