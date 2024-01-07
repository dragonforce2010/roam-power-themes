import { create } from 'zustand'

const useAppStore = create(set => ({
  reserverd: {},

}))

export default useAppStore