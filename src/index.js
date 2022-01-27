module.exports =
    function check(str, bracketsConfig) {
        let stack = [];
        let arr = bracketsConfig.flat();
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (isClosing(char)) {
                if (isOpening(char)) {
                    if (stack.length === 0) {
                        stack.push(char);
                    } else {
                        cleanIfNeeded(char);
                    }
                } else {
                    if (stack.length === 0) {
                        return false;
                    } else {
                        cleanIfNeeded(char);
                    }
                }
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;

        function isClosing(char) {
            return arr.lastIndexOf(char) % 2 === 1;
        }

        function isOpening(char) {
            return arr.indexOf(char) % 2 === 0;
        }

        function cleanIfNeeded(char) {
            arr.indexOf(stack[stack.length - 1]) + 1 === arr.lastIndexOf(char) ? stack.pop() : stack.push(char);
        }
    }