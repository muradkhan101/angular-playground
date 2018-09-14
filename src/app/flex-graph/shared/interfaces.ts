export interface IGraph {
    Children: Array<IGraph>;
    Type: 'Grouping' | 'Person' | 'Site';
    Title: 'Layer' | 'Level' | 'Position' | 'Shift' | string;
    SubTitle: string;
    LevelGap: number;
}