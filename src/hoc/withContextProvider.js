const withContextProvider = (CtxProvider, Component) => {
  return (
    <CtxProvider>
      <Component />
    </CtxProvider>
  )
}

export default withContextProvider
