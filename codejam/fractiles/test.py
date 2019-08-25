import unittest
import main


class Test(unittest.TestCase):

    def test_map_tiles(self):
        # given
        original_tiles = 'LGL'

        # when
        mapped = main.map_tiles(original_tiles, original_tiles)

        # then
        self.assertEqual(mapped, 'LGLGGGLGL')

    def test_map_tile_G(self):
        # given
        original_tiles = 'LGL'

        # when
        mapped = main.map_tile(original_tiles, 'G')

        # then
        self.assertEqual(mapped, 'GGG')

    def test_map_tile_L(self):
        # given
        original_tiles = 'LGL'

        # when
        mapped = main.map_tile(original_tiles, 'L')

        # then
        self.assertEqual(mapped, 'LGL')

    def test_possible_seq(self):
        res = main.generate_possible_seq(2)
        res.sort()
        self.assertEqual(res, ['GG', 'GL', 'LG', 'LL'])

    def test_generate_artwork(self):
        self.assertEqual(main.generate_artwork('GG', 3), 'GGGGGGGG')
        self.assertEqual(main.generate_artwork('GL', 3), 'GGGGGGGL')
        self.assertEqual(main.generate_artwork('LG', 3), 'LGGGGGGG')
        self.assertEqual(main.generate_artwork('LL', 3), 'LLLLLLLL')

    def test_generate_possible_artworks(self):
        K = 2
        C = 3
        expected = ['GGGGGGGG', 'GGGGGGGL', 'LGGGGGGG', 'LLLLLLLL']
        self.assertEqual(main.generate_possible_artworks(K, C), expected)

    def test_get_position(self):
        K = 2
        C = 1
        S = 1
        self.assertEqual(main.get_position(K, C, S), None)


if __name__ == '__main__':
    unittest.main()
