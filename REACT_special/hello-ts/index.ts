export class 카운터 {
  private 값

  constructor(값: number) {
    this.값 = 값
  }

  더하기() {
    this.값 += 1
  }

  빼기() {
    this.값 -= 1
  }
}