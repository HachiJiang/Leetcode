/**
 * Created by jianghong on 2016/12/29.
 */
public class IslandPerimeter {
    public int islandPerimeter(int[][] grid) {
        if (grid == null)
            throw new java.lang.IllegalArgumentException("Invalid params!");

        int islands = 0;
        int neighbors = 0;
        for (int i = 0, il = grid.length; i < il; i++) {
            int[] row = grid[i];
            for (int j = 0, jl = row.length; j < jl; j++) {
                if (row[j] == 1) continue;
                islands++;
                if (j + 1 < jl && row[j + 1] == 1) neighbors++;     // right block
                if (i + 1 < il && grid[i + 1][j] == 1) neighbors++; // bottom block
            }
        }

        return islands * 4 - neighbors * 2;
    }
}
