import HttpHelper from './HttpHelper';

class CompilerApi {
  static requestHeaders() {
    return { 'Content-Type': 'application/json' };
  }

  // static getTask(lang) {
  //   return HttpHelper.fetch(
  //     `${process.env.API_URL}/api/file/${lang}`,
  //     'GET',
  //     this.requestHeaders(),
  //     null,
  //   );
  // }

  static run(answer) {
    return HttpHelper.fetch(`${process.env.API_URL}/code`, "POST", this.requestHeaders(), JSON.stringify(answer));
  }
}

export default CompilerApi;