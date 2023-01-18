{
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailureState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadingState = LoadingState | SuccessState | FailureState;

  function printLoginState(state: ResourceLoadingState) {
    switch (state.state) {
      case "loading":
        console.log("loading...");
        break;
      case "success":
        console.log(`😀${state.response.body}`);
        break;

      case "fail":
        console.log("fail");
        break;

      default:
        throw new Error(`unknown state: + ${state}`);
    }
  }

  printLoginState({ state: "loading" });
  printLoginState({ state: "success", response: { body: "loaded" } });
  printLoginState({ state: "fail", reason: "no network" });
  console.log("test1 : ", printLoginState);
}
