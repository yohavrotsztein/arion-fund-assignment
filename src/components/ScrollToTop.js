import React, { useCallback } from "react"
// @mui
import { useScrollTrigger, Zoom, Fab, Box } from "@mui/material"
import { KeyboardArrowUp } from "@mui/icons-material"

const ScrollToTopFab = () => {
  // Use `window` instead of `body` as `document` will be `undefined` when the
  // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
  const trigger = useScrollTrigger({
    // Number of pixels needed to scroll to toggle `trigger` to `true`.
    threshold: 100,
  })

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={scrollToTop}
          size="small"
          aria-label="Scroll back to top"
          style={{backgroundColor: "#1C8CA9", color: "#ffffff"}}
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Box>
    </Zoom>
  )
}

export default ScrollToTopFab