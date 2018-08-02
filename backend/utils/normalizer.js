function responseNormalizer (isSuccess, dataOrErrMsg) {
  if (isSuccess) {
    return {
      'success': true,
      'data': dataOrErrMsg
    };
  } else {
    return {
      'success': false,
      'message': dataOrErrMsg
    };
  }
};

export {
  responseNormalizer
};
