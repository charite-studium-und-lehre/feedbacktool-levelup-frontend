import _ from 'lodash'

const tree = {
    label: 'root',
    entries: _.range(1,11).map(i =>
        ({
            label: `${i}. Fachsemester`,
            entries: [
                {
                    label: 'Semesterprüfung',
                    entries: [
                        {
                            label: 'foo',
                            isLeaf: true,
                            done: _.random(1)
                        }
                    ]
                },
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Anwesenheit',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Stationsprüfung',
                    isLeaf: true,
                    done: _.random(1),
                },
            ]
        })
    )
}

export default tree