import unittest
import sheep


class Test(unittest.TestCase):

    def test_digits(self):
        number = 4131
        digits = sheep.digits(number)
        self.assertEqual(digits, [1, 3, 1, 4])


if __name__ == '__main__':
    unittest.main()
