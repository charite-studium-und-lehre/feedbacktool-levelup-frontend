import { curveMonotoneX, curveStep, curveBasis } from 'd3-shape'

const curveSelect = function(curve) {
    return curve === 'basis' ? curveBasis :
                curve === 'step' ? curveStep :
                curveMonotoneX;
}

export { curveSelect }