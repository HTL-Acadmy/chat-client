import { Box } from "@chakra-ui/react"
import { Suspense, useEffect } from "react"
import { Loader } from "./Common"
import { Route, Routes } from "react-router-dom"
import { ClientRoutes, SocketClient } from "./utils"
import { ChatPage, LandingPage, NotFound } from "./Pages"


function App() {

  return (
    <Suspense fallback={<Loader />} >
      <Box
        className="App"
        width={"100vw"}
        height={"100vh"}
      >
        <Routes>
          <Route path={ClientRoutes.landingPage} element={<LandingPage />} />
          {/* Manger Routes  */}
          <Route path={ClientRoutes.chatPage} element={<ChatPage />} />


          <Route path="*" element={<NotFound />} />
        </Routes>

      </Box>
    </Suspense>
  )
}

export default App
