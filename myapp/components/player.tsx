import {
ButtonGroup,
Box,
IconButton,
RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text
} from "@chakra-ui/react"
import ReactHowler from 'react-howler'
import {useEffect, useRef, useState} from 'react'

import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
  MdOutlineSkipPrevious
} from 'react-icons/md'
import {useStoreActions} from 'easy-peasy' //dont need to import store, it's already provided through this

const Player = ({songs, activeSong}) => {
  const [playing, setPlaying] = useState(false) // automatically plays when a song is chosen, so true
  const [index, setIndex] = useState(0) // start at the index 0 song (first song in playlist)
  const [seek, setSeek] = useState(0) // this is the value of the seek, minute seconds
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const [duration, setDuration] = useState(0.0)

  const setPlayState = (value) => {
    setPlaying(value)
  }

  const onShuffle = () => {
    //guarantees you have the current state when you need it 
    setShuffle( (state) => !state) 
  }

  const onRepeat = () => {
    setRepeat( (state) => !state) 
  }


  return (
    <Box>
      <Box>
        <ReactHowler 
        playing={playing}
        src={activeSong?.url}
        />
      </Box>

      <Center color="gray.600" > 
        <ButtonGroup>
          <IconButton outline="none" variant="link" 
            aria-label="shuffle" fontSize="24px" 
            icon={<MdShuffle />} // you're invoking the function
            color={shuffle ? 'white' : 'gray.600'}
            onClick={onShuffle}
          />
          <IconButton outline="none" variant="link" 
            aria-label="skip" fontSize="24px" 
            icon={<MdSkipPrevious />} // you're invoking the function
          />
          {playing ? 
          <IconButton outline="none" variant="link" 
            aria-label="pause" fontSize="40px" 
            color="white"
            icon={<MdOutlinePauseCircleFilled />} // you're invoking the function
            onClick={()=> setPlayState(true)}
          />
          :
          <IconButton outline="none" variant="link" 
            aria-label="play" fontSize="40px" 
            color="white"
            icon={<MdOutlinePlayCircleFilled />} // you're invoking the function
            onClick={()=> setPlayState(false)}
          />
          }
            
          
          <IconButton outline="none" variant="link" 
            aria-label="next" fontSize="24px" 
            icon={<MdSkipNext />} // you're invoking the function
          />
          <IconButton outline="none" variant="link" 
            aria-label="repeat" fontSize="24px" 
            icon={<MdOutlineRepeat />} // you're invoking the function
            color={repeat ? 'white' : 'gray.600'}
            onClick={onRepeat}
          />
        </ButtonGroup>
      </Center>

    {/* current run time, the play bar */}
      <Box color="gray.600"> 
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="xs">1:21</Text>
          </Box>
          <Box width="80%">
            <RangeSlider aria-label={['min', 'max']} step={0.1}
              min={0} max={321}
              id="player-range"
            > 
              {/* this component takes children */}
              <RangeSliderTrack bg="gray.800">
                
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
                {/* this is teh thing actually moving */}
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign="right">
            <Text font="xs"> 3:21</Text>
          </Box>
        </Flex>
      </Box>

    </Box>
  )
}

export default Player

