import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Box, HStack, useColorModeValue } from '@chakra-ui/react'
import React, { useReducer, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import LayoutContent from './components/LayoutContent'
import Categories from './pages/Categories'
import Products from './pages/Products'
import CreateCategory from './pages/CreateCategory'
import CreateProduct from './pages/CreateProduct'
import MainContext from './store/context'
import { initialState, reducer } from './store/reducer'

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [showDash, setShowDash] = useState(false)

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      <HStack width={"100%"} alignItems={"start"} gap={"0"}>
        <Box width={"250px"} zIndex={"9999"} transition={"ease .3s"} position={{ base: "absolute", md: "relative" }} left={{ base: showDash ? "0px" : "-250px", md: "0" }} backgroundColor={useColorModeValue("purple.600", "gray.900")} height={"100vh"} borderRight={"1px"} borderColor={"whiteAlpha.400"}>
          <Sidebar setShowDash={setShowDash}/>
          <Box position={"absolute"} right={"-19px"} display={{base : "block" , md : "none"}} cursor={"pointer"} onClick={() => setShowDash(!showDash)} top={"50%"} py={"20px"} pr={"3px"} color={"white"} backgroundColor={useColorModeValue("purple.600", "gray.900")} roundedRight={"10px"}   border={"1px"} borderLeft={"0px"} borderColor={"whiteAlpha.400"}>
            {showDash ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </Box>
        </Box>
        <Box width={{ base: "100%", md: "calc(100% - 250px)" }}>
          <Header />
          <Routes>
            <Route path='/' element={<LayoutContent />}>
              <Route path='/' element={<Categories />} />
              <Route path='/products' element={<Products />} />
              <Route path='/create-category' element={<CreateCategory />} />
              <Route path='/create-product' element={<CreateProduct />} />
            </Route>
          </Routes>
        </Box>
      </HStack>
    </MainContext.Provider>
  )
}

export default App
