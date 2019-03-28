import _ from 'lodash'

const tree = {
    label: 'root',
    entries: _.range(1,11).map(i =>
        ({
            label: `${i}. Fachsemester`,
            entries: [
                {
                    label: 'Semesterprüfung',
                    entries: _.range(1,_.random(2,4)).map(d => (
                        {
                            label: 'foo' + d,
                            isLeaf: true,
                            done: _.random(1)
                        }
                    ))
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
                    label: 'Praktische Prüfung',
                    isLeaf: true,
                    done: _.random(1),
                },
            ]
        })
    )
}

export default tree