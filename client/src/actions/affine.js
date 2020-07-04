import { SET_AFFINE_ALPHA, SET_AFFINE_BETA } from './constants';

export const setAffineAlpha = (affine_alpha) => ({
  type: SET_AFFINE_ALPHA,
  affine_alpha,
});

export const setAffineBeta = (affine_beta) => ({
  type: SET_AFFINE_BETA,
  affine_beta,
});
