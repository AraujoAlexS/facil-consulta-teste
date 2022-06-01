<template>
  <div class="wrapper">
    <div class="flip">
      <div class="front">
        {{ front }}
      </div>
      <div class="back">
        {{ back }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlipCard",
  props: {
    front: String,
    back: String,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0;
  background: white;

  transition: all 0.3s ease-in-out;
  perspective: 800px;

  &:hover {
    cursor: pointer;

    .flip {
      transform: rotateY(180deg);
    }
  }

  .flip {
    width: 100%;
    height: 100%;
    min-height: 100px;
    transform-style: preserve-3d;
    transition: all 1s ease-in-out;
    perspective: 1000px;
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    color: white;
  }

  .front {
    z-index: 2;
    background: var(--primary);
  }
  .back {
    z-index: 1;
    background: var(--primary-active);
    transform: rotateY(180deg);
  }
}
</style>
