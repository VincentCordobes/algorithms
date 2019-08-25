import unittest
import a


class Test(unittest.TestCase):

    def test_flip(self):
        # given
        pancake = '-'

        # when
        flipped = a.flip(pancake)

        # then
        self.assertEqual(flipped, '+')

    def test_flip_all(self):
        # given
        pancakes = '-+++-'

        # when
        flipped = a.flip_all(pancakes)

        # then
        self.assertEqual(flipped, '+---+')

    def test_check_ok(self):
        self.assertEqual(a.check_ok('++++'), True)

    def test_check_not_ok(self):
        self.assertEqual(a.check_ok('---+'), False)

    def test_sample1(self):
        input = '-'
        res = a.solve(input)
        self.assertEqual(res, 1)

    def test_find_end_index(self):
        self.assertEqual(a.find_end_index('-+--+'), 3)

    def test_sample2(self):
        input = '-+'
        res = a.solve(input)
        self.assertEqual(res, 1)

    def test_sample3(self):
        input = '+-'
        res = a.solve(input)
        self.assertEqual(res, 2)

    def test_sample4(self):
        input = '+++'
        res = a.solve(input)
        self.assertEqual(res, 0)

    def test_sample5(self):
        input = '--+-'
        res = a.solve(input)
        self.assertEqual(res, 3)


if __name__ == '__main__':
    unittest.main()
