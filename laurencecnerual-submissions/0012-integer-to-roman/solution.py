class Solution:
    def intToRoman(self, num: int) -> str:
        standard_mapping = {
            1000: "M",
            500: "D",
            100: "C",
            50: "L",
            10: "X",
            5: "V",
            1: "I"
        }

        subtractive_mapping = {
            900: "CM",
            400: "CD",
            90: "XC",
            40: "XL",
            9: "IX",
            4: "IV"
        }

        roman = ""
        iNum = num
        sNum = str(num)

        normal_numbers = standard_mapping.keys()
        irregular_numbers = subtractive_mapping.keys()

        while iNum > 0:
            if sNum[0] == "4" or sNum[0] == "9":
                for num in irregular_numbers:
                    if iNum >= num:
                        roman += subtractive_mapping[num]
                        iNum -= num
                        break
            else:
                for num in normal_numbers:
                    if iNum >= num:
                        roman += standard_mapping[num]
                        iNum -= num
                        break

            sNum = str(iNum)

        return roman
