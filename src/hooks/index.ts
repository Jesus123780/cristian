import { useState } from "react"

function useMyHook(value: string) {
  const [state, setState] = useState(value)

  return {
    state,
    setState
  }
}

export default useMyHook;
