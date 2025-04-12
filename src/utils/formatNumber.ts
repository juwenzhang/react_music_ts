function numberSeparator(
  value: number,
  separator: string = ',',
  precision: number = 3,
) {
  if (typeof value !== 'number')
    throw new Error('formatNumber: value must be a number');
  let num_str = value.toString();
  let num: string, dec: string;
  if (num_str.includes('.')) {
    num = num_str.split('.')[0];
    dec = num_str.split('.')[1];
  } else {
    num = num_str;
    dec = '';
  }
  let len = num.length;
  if (len < precision) {
    return dec ? num + '.' + dec : num;
  } else {
    let temp = '';
    let remainder = len % precision;
    if (remainder > 0) {
      temp = num.substring(0, remainder) + separator;
    }
    temp += num
      .slice(remainder)
      .match(new RegExp(`\\d{${precision}}`, 'g'))
      .join(separator);
    return dec ? temp + '.' + dec : temp;
  }
}

export default numberSeparator;
